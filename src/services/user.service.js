import userRepository from "../Repository/user.repository";
import bcrypt from 'bcrypt';
import authMiddleware from "../middleware/auth.middleware";
import { BadRequestException } from "../Helpers/ExceptionHandler";
import { defaultCategory } from "../Helpers/commonHelper";
import categoryRepository from "../Repository/category.repository";

class UserService{
    async createUser(requestbody){
        const {password} = requestbody;
        const salt =await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        requestbody.password = hashPassword;
        const user = await userRepository.createUser(requestbody);
        console.log('user',user);
        defaultCategory.map(async category => {
            category.user_id = user.id,
            await categoryRepository.createCategory(category);
        })
        return user;
    }

    async logingUser(requestbody){
        const { email, password} = requestbody;
        const user = await userRepository.fetchUserByEmail(email);
        if (!user) {
        throw new BadRequestException('Your email is incorrect');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
        throw new BadRequestException('your password does not match');
        }
    const payload = {
        userId: user.id,
        email: email
    }
    return authMiddleware.generateToken(payload);
    }
}

export default new UserService;