
const User=require('./models/User')


const isLoggedIn=(req,res,next)=>{
    if(req.xhr && !req.isAuthenticated()){
        return res.status(401).json({msg:'you need to login first'});
    }
    
    if(!req.isAuthenticated()){
        
        return res.redirect('/login');
    }
    next();
}
module.exports={isLoggedIn};