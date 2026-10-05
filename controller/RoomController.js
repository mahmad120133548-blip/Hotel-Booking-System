import prisma from "../config/prisma.js"

export const roomCreate=async(req,res)=>{

    const {roomNumber,type,price}=req.body;

    if(!roomNumber || !type || !price )
    {
        return res.send("all fields are required")
    }

    const rooms=await prisma.room.create({
        data:{
            roomNumber,
            type,
            price:Number(price)
        }
    });

   return res.redirect("/room/rooms");
}

export const getRoom=async(req,res)=>{

    const rooms=await prisma.room.findMany();

    res.render("hotel/room",{
        rooms
    });

};

export const editRoom=async (req,res)=>{

    const id=Number(req.params.id)


    const room=await prisma.room.findUnique({
        where:{
            id
        }
    });

    if(!room)
    {
        res.send('Room not Found')
    }

    res.render("hotel/editRoom",{
        room //sara data rooms ka ander ha , rooms sa data room ma save krka editroom wali file ma use kr rha
    });

}

export const updateRoom=async(req,res)=>{

    const id=Number(req.params.id)

    const{roomNumber,type,price}=req.body;

    if(!roomNumber || !type || !price)
    {
        res.send("all fields are required")
    }

     await prisma.room.update({
        where:{
            id
        },
        data:{
            roomNumber,
            type,
            price:Number(price)
        }
     });

     res.redirect("/room/rooms")
}

export const deleteRoom=async(req,res)=>{

    const id=Number(req.params.id)

    const room=await prisma.room.findUnique({
        where:{
            id
        }
    });

    if(!room)
    {
        res.send("Room not Available");
    }

    await prisma.room.delete({
        where:{
            id:id
        }
    });
     res.redirect("/room/rooms")


}

export const getCustomerRooms=async(req,res)=>{

    const rooms=await prisma.room.findMany();

    res.render("hotel/CustomerRooms",{
        rooms
    });
        
}