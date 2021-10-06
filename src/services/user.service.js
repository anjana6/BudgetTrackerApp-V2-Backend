import userRepository from "../Repository/user.repository";
import bcrypt from 'bcrypt';
import authMiddleware from "../middleware/auth.middleware";

class UserService{
    async createUser(requestbody){
        const {password} = requestbody;
        const salt =await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        requestbody.password = hashPassword;
        return userRepository.createUser(requestbody)
    }

    async logingUser(requestbody){
        const { email, password} = requestbody;
        const user = await userRepository.fetchUserByEmail(email);
        if (!user) {
        throw new BadRequestException('Your userName is incorrect');
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