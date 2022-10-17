const userC= require("../controllers/userController");
const express= require("express");
const userRoute= express.Router();

userRoute.get('/login/',userC.Login);
userRoute.post('/registration/',userC.registration);
userRoute.put('/updateProfile/',userC.updateProfile);

module.exports= userRoute;
