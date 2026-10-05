import express from "express";
//import productRoute from "./Routes/ProductRoutes.js"
//import studentroute from "./Routes/StudentRoute.js"
//import courserouter from "./Routes/CourseRouter.js"
//import  userrouter from "./Routes/UserRouter.js";
//import passportrouter from "./Routes/PassportRouter.js";
//import bookrouter from "./Routes/BookRouter.js";
//import employeerouter from "./Routes/EmployeeRouter.js";
import accountrouter from "./Routes/AccountRouter.js";
import cookieParser from "cookie-parser";
import roomrouter from "./Routes/RoomRouter.js";
import bookingrouter from "./Routes/BookingRouter.js";

const app=express();

app.set("view engine","ejs");
app.set("views","./views");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

//app.use("/user",userrouter);
//app.use('/passport',passportrouter);

//app.use('/',productRoute);

//app.use("/student",studentroute);
//app.use("/course",courserouter);

//app.use("/api",bookrouter);

//app.use("/api",employeerouter);

app.use("/",accountrouter);
app.use('/room',roomrouter);
app.use("/booking",bookingrouter);


app.listen(2017,()=>{
    console.log("server running on port 2017")
});


