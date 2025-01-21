import e from "express";

const router = e.Router();

//Register
restaurantownerRouter.post('/signup', restaurantownerRegister);

//Signin
restaurantownerRouter.put('/login', restaurantownerlogin);

//Logout
restaurantownerRouter.get('/logout', restaurantownerAuth, restaurantownerLogout);

//Profile
restaurantownerRouter.get('/profile',  restaurantownerAuth, restaurantownerProfile)


//Updateprofile
restaurantownerRouter.get('/updateprofile', restaurantownerAuth,updaterestaurantownerProfile );
export { router as ownerRouter };

