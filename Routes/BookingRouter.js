import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminOnly, customerOnly } from "../middleware/rolemiddleware.js";
import { allBookings, bookingForm, bookingStatus, createBooking, myBookings } from "../controller/BookingController.js";

const router=express.Router()

router.get("/mybookings",authMiddleware,customerOnly,myBookings);

router.get("/view/:roomId", bookingForm);

router.post("/create/:roomId",authMiddleware,customerOnly,createBooking);

router.get("/all",authMiddleware,adminOnly,allBookings);

router.post("/status/:id",authMiddleware,adminOnly,bookingStatus);



export default router;