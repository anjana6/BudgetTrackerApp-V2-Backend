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

    loginUser(req,res){
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UserController;