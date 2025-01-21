import e from "express";
import {userRegister } from "../controllers/userControllers.js";

const router = e.Router();
//Register
userRouter.post('/register', userRegister);

//Signin
userRouter.put('/signin', userSignin);

//Logout
userRouter.get('/logout', userAuth, userLogout);

//Profile
userRouter.get('/profile', userAuth, userProfile);

//Updateprofile
userRouter.get('/updateprofile', userAuth,updateUserProfile );


export { router as userRouter };
