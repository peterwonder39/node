const express =require('express');
const router = express.Router();
const{getSignup,postRegister,getSignIn,postLogin,getDashboard}=require('../controllers/user.controller')


router.get("/signup",getSignup)
router.post("/register",postRegister)
router.get("/signin",getSignIn)
router.post("/login",postLogin)
router.get("/dashboard",getDashboard)

module.exports= router

