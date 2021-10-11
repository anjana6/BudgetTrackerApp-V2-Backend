import { response } from "express";
import { BadRequestException } from "../Helpers/ExceptionHandler";
import resHelper from "../Helpers/resHelper";
import userService from "../services/user.service";

class UserController {
   async createUser(req,res){
        try {
            await userService.createUser(req.body);
            resHelper.created(res);
        } catch (error) {
            console.log(error)
        }
    }

    async loginUser(req,res){
        try {
            const response = await userService.logingUser(req.body);
            resHelper.successCustom(res,response)
        } catch (error) {
            if (error instanceof BadRequestException) {
                resHelper.badRequest(res,403, error.message);
                return;
              }
            console.log(error)
        }
    }

    test(req,res){
        try {
            res.send('aaaaaaaaaaaa')
        } catch (error) {
            console.log(error);
        }
    }
}



export default new UserController;