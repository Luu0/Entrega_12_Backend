import {Router} from 'express'
import { authMiddlewareAdmin, authMiddlewareUser } from './Custom/authMiddleware.js';
import { getAllUsers,getUserByIdController} from '../Controllers/user.controller.js';

const router = Router();

router.get("/allusers",getAllUsers)

router.get("/:uid",getUserByIdController)

router.get("/login", (req,res)=>{
    res.render('login')
})

router.get("/register", (req,res)=>{
    res.render('register')
})

router.get("/",authMiddlewareUser, (req,res)=>{
    res.render('profile', {user:req.session.user})
})

// router.put("/premium/:uid",authMiddlewareAdmin,(req))

export default router