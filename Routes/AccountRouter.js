import express from "express";
import {loginAccount, registerAccount} from "../controller/AccountController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminOnly, customerOnly } from "../middleware/rolemiddleware.js";


const router = express.Router()

router.get("/register",(req,res)=>{
    res.render("hotel/register");
});

router.post("/create",registerAccount);

router.get("/login",(req,res)=>{
    res.render("hotel/login");
});


router.post("/store",loginAccount);

router.get("/customer/dashboard",authMiddleware,customerOnly,(req,res)=>{
    res.render("hotel/dashboard",{
        account:req.account
    });    
});

router.get("/admin/dashboard",authMiddleware,adminOnly,(req,res)=>{
    res.render("hotel/adminDashboard",{
        account:req.account
    });
});





export default router;