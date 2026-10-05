import { data } from "react-router-dom";
import prisma from "../config/prisma.js";


export const bookingForm=async(req,res)=>{

const roomId=Number(req.params.roomId)

const room=await prisma.room.findUnique({
    where:{
        id:roomId
    }
});

if(!room)
{
    return res.send("Room not exist")
}

return res.render("hotel/booking",{
    room
});

}

export const createBooking=async(req,res)=>{

    const accountId=req.account.id;
    const roomId=Number(req.params.roomId);



    const{checkIn,checkOut}=req.body;

    const checkInDate=new Date(checkIn);
    const checkOutDate=new Date(checkOut);

    const today=new Date();

    if(checkInDate < today || checkOutDate < today)
    {
        return res.status(400).send("sorry ! you cannot choose the past date ")
    }

    if(!checkIn || !checkOut)
    {
        res.send("all field required")
    }

    const existingBooking=await prisma.booking.findFirst({
        where:{
            roomId:roomId,

            status:{
                not: "CANCEL"
            },

            checkIn:{
                lt:new Date(checkOut)
            },
            checkOut:{
                gt:new Date(checkIn)
            },
        }
    });

    if(existingBooking)
    {
       return res.status(401).send("soory ! the room is already booked")
    }

    

    const booking=await prisma.booking.create({
        data:{
            checkIn:new Date(checkIn),
            checkOut:new Date(checkOut),

            account:{
                connect:{
                    id:accountId

                }
            },
            room:{
                connect:{
                    id:roomId
                }
            },

        }
    });

    res.send("Booking created successfully");
}

export const myBookings=async(req,res)=>{
    const accountId=req.account.id;

    const bookings=await prisma.booking.findMany({
        where:{
            accountId,

        status:{
            not:"CANCEL",
        }    
        },
        include:{
            room:true
        }
    });

    res.render("hotel/myBookings",{
        bookings
    });
}

 export const allBookings=async(req,res)=>{

    const bookings=await prisma.booking.findMany({
        include:{
            account:true,
            room:true
        }
    });

    res.render("hotel/allBookings",{
        bookings
    });

 };

 export const bookingStatus=async(req,res)=>{

    const bookingId=Number(req.params.id);
    const{status}=req.body;

    if(!status)
    {
        return res.status(401).send("status is requierd")
    }
    await prisma.booking.update({
        where:{
            id:bookingId,
        },
        data:{
            status
        }

    });

    return res.redirect("/booking/all");
 }