const express=require('express');
const app=express();
const path=require('path')
const mongoose = require('mongoose');
const ejsMate=require('ejs-mate');
const productRoutes=require('./routes/product');
const authroutes=require('./routes/auths')
const session=require('express-session');
const passport=require('passport');
const LocalStrategy=require('passport-local')
const User=require('./models/User');


mongoose.connect('mongodb://127.0.0.1:27017/sashakt-sathi')
.then(()=>{
    console.log("db connected successfully")
})
.catch((err)=>{
    console.log("db error");
    console.log(err)
})


let configSession={
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly: true,
        expires:Date.now()+24*7*60*60*1000,
        maxAge:24*7*60*60*1000
    }    
  }
  app.use(express.urlencoded({extended:true}))

  app.use(session(configSession));
  app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.engine('ejs',ejsMate);//here i am setting engine
app.set('view engine','ejs');// here i am definigg work of engine
app.set('views',path.join(__dirname,'views'))//views folder
app.use(express.static(path.join(__dirname,'public')));

app.use(productRoutes)//so that harr incoming request ke liye ye pg chle
app.use(authroutes)
passport.use(new LocalStrategy(
    User.authenticate()
));

 //otherwise req. body gives undefined

app.listen(8080,()=>{
    console.log('server connected at port 8080')
})
