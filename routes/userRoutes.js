import express from "express";
import { userRegister, userSignin, userLogout, userProfile, updateUserProfile } from "../controllers/userControllers.js";
import {  userAthmiddleware } from "../middlewares/userAuth.js"; 


const router = express.Router();

// Register
router.post('/register', userRegister);

// Signin
router.post('/signin', userSignin);

// Logout
router.get('/logout',  userAthmiddleware, userLogout);

// Profile
router.get('/profile',  userAthmiddleware, userProfile);

// Update Profile
router.put('/updateprofile',  userAthmiddleware, updateUserProfile);

export {router as userRouter};
