import {Router} from 'express'
import { authMiddlewareAdmin, authMiddlewareUser } from './Custom/authMiddleware.js';
import { getAllUsers,getUserByIdController,MakeUserPremium} from '../Controllers/user.controller.js';

const router = Router();

router.get("/allusers",getAllUsers)

router.get("/find/:uid",getUserByIdController)

router.get("/premium/:uid", authMiddlewareAdmin, MakeUserPremium)

router.get("/login", (req,res)=>{
    res.render('login')
})

router.get("/register", (req,res)=>{
    res.render('register')
})

router.get("/",authMiddlewareUser, (req,res)=>{
    res.render('profile', {user:req.session.user})
})

router.get('/reset-password/:token', (req, res) => {
    const token = req.params.token;
    res.render('reset-password', { token });
});

router.get('/recover-password', (req, res) => {
    res.render('recover-password');
})

export default router