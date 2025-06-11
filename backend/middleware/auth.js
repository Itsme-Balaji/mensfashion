const jwt = require('jsonwebtoken');

const authMiddleware = async (req,res,next) =>{
    const token = req.headers.token;

    if(!token){
        return res.status(401).send({status:0,message: "Login again"})
    }

    try {
            const decoded = jwt.verify(token, 'balajiee');
            req.user = decoded.user;
            next();
        
    } catch (error) {
        console.log("JWT Error:",error);
        return res.status(401).send({status:0,message: "Invalid Token"})
        
    }
};

module.exports = authMiddleware