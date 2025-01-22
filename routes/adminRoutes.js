import e from "express";
import {userRegister}from "../routes/userRoutes"

const router = e.Router();


//Register
router.post('/register', userRegister);

//Signin
router.put('/signin', userSignin);

//Logout
router.get('/logout', userAuth, userLogout);

//Profile
router.get('/profile', userAuth, userProfile);

//Updateprofile
router.get('/updateprofile', userAuth,updateUserProfile );


export { router as adminRouter };
