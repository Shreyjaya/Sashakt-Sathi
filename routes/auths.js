


const express=require('express');
const User = require('../models/User');
const passport = require('passport');
const { isLoggedIn } = require('../middleware');
const router=express.Router();


router.get('/login',(req,res)=>{
    res.render('auth/login');
})
router.get('/register',(req,res)=>{
    res.render('auth/signup');
})

router.post('/register',async(req,res)=>{
    // try{
        let{email,password,username,role}= req.body;
        const user=new User({email,username,role})
        const newUser=await User.register(user,password);
        // res.redirect('/login');

        req.login(newUser,function(err){
            if(err){
                return next(err)
            }
            
            return res.redirect('/sashaktsathi')
        })
    // }
    // catch(e){
        
        // return res.redirect('/register');

    // }
    
    
})
router.post('/login',
    passport.authenticate('local', { 
       failureRedirect: '/login', 
       failureMessage: true ,
    }),
    function(req, res) {
        // console.log(req.user);
        
        // console.log(req.session);
        res.redirect(`/sashaktsathi`);
    }
);
router.get('/logout',(req,res)=>{
    
    res.redirect('/login');
})

module.exports=router