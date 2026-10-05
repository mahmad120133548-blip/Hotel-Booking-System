import jwt from "jsonwebtoken";
export const authMiddleware=async (req,res,next)=>{

    const token=req.cookies.token;

    if(!token)
    {
        res.status(401).json({
            message:"token is required"
        })
    };
  


try{

    const decoded=jwt.verify(
        token,
        process.env.JWT_SECRET,
    )
    req.account=decoded;
    next();
}    

catch(error)
{
   return res.status(401).send("Invalid or expire token");
};


}
































// import jwt from "jsonwebtoken";

// export const authMiddleware=(req,res,next)=>{

//     const authHeader=req.headers.authorization;

//     const token=authHeader.split("")[1];
    
// try{
//     const decoded=jwt.verify(
//         token,
//         process.env.JWT_SECRET
//     );
//     req.employeeId=decoded.id;
//     next();
// }
// catch(error)
// {
//     return res.status(401).json({
//         message:"Invalid or expire token"
//     });
// }

// }