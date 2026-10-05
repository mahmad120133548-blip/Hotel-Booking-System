export const adminOnly=(req,res,next)=>{

    if(req.account.role !== "ADMIN")
    {
        return res.status(403).send("Access denied")
    }
    next();
}

export const customerOnly=(req,res,next)=>{

    if(req.account.role !=="CUSTOMER")
        {
            return res.status.send("Access Denied")
        } 

        next();
}