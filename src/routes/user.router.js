import express from "express";
import userController from "../Controllers/user.controller";


const userRoute = express.Router();

userRoute.post('/api/user/',userController.createUser);

export default userRoute;