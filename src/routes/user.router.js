import express from "express";
import userController from "../Controllers/user.controller";


const userRoute = express.Router();

userRoute.post('/api/user/',userController.createUser);
userRoute.post('/api/user/login',userController.loginUser);
userRoute.get('/api/test',userController.test);

export default userRoute;