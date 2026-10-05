import prisma from "../config/prisma.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerAccount=async(req,res)=>{

   const {name,email,password}=req.body;

   if (!name || !email || !password)
   {
    res.status(401).send("all fields are required")
   }

   const existingaccount=await prisma.account.findUnique({
    where:{
        email,
    }
   });

   if(existingaccount)
   {
    res.status(401).send("email already exist")
   }

   const hashpassword=await bcrypt.hash(password,10);

   const accounts=await prisma.account.create({
    data:{
        name,
        email,
        password:hashpassword
    }
   });

   res.status(401).send("account registered successfully");

}

export const loginAccount=async(req,res)=>{

    const{email,password}=req.body;

    if(!email || !password)
    {
        res.status(401).send("email or password required")
    }

    const emails=await prisma.account.findUnique({
        where:{
            email
        },
    });
    if(!emails)
    {
       return res.status(401).send("wrong email")
    }

    const matchPasswords= await bcrypt.compare(
        password,
        emails.password
    );

    if(!matchPasswords)
    {
       return res.status(401).send("wrong password")
    }

    const token=jwt.sign({
        id:emails.id,
        role:emails.role
    },

    process.env.JWT_SECRET,
    {
        expiresIn:"1h"
    });

    res.cookie("token",token,{
        httpOnly:true,
        maxAge:60*60*1000
    });
    if(emails.role==="ADMIN")
    {
        return res.redirect("/admin/dashboard")
    }
    if(emails.role==="CUSTOMER")
    {
        return res.redirect("/customer/dashboard")
    }

}