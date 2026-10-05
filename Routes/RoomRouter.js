import express from "express";
import {deleteRoom, editRoom, getCustomerRooms, getRoom, roomCreate, updateRoom} from "../controller/RoomController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/rolemiddleware.js";

const router=express.Router()

router.get("/",(req,res)=>{
    res.render("hotel/createroom");
});

router.post("/create",roomCreate);

router.get("/rooms",authMiddleware,  getRoom);

router.get("/edit/:id",authMiddleware, adminOnly,editRoom);


router.post("/update/:id",authMiddleware,adminOnly,updateRoom);

router.post("/delete/:id",authMiddleware,adminOnly,deleteRoom);

router.get("/customer/rooms",authMiddleware,getCustomerRooms);
export default router;