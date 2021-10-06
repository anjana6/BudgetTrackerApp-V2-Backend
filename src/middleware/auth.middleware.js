import jwt from 'jsonwebtoken';
import resHelper from '../Helpers/resHelper';
import userRepository from '../Repository/user.repository';

class AuthMiddleWare{

    generateToken(payload){
        return jwt.sign(payload,'budget_Tracker', {expiresIn: '7d'});
    }

    async grantAccess(req,res,next){
        const token = req.headers.authorization;
        console.log('88888888',token)
        if (!token) {
        return resHelper.unauthorized(res);
        }

        try {
            const payload = jwt.verify(token,'budget_Tracker');
            const { userId,email} = payload;
            const isUser = await userRepository.fetchUserByEmail(email);

            if (!isUser) {
            return resHelper.unauthorized(res);
            }
            req.userId = userId;
            next()
        } catch (error) {
            console.log(error)
        }

        
    }

}

export default new AuthMiddleWare();