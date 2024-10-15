const jwt = require('jsonwebtoken');

const authorizationAdmin = (req, res, next) =>{
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({message : 'Token Not Provided'})  
    } 
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'ADMIN') {
            return res.status(403).json({message: 'Unauthorized'})   
        }
        next();
    } catch (error) {
        console.error('Authorization error:', error.message);
        return res.status(401).json({message: 'invalid token'})
        
    }
}

module.exports = authorizationAdmin;