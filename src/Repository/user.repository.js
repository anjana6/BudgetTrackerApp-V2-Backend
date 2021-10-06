
const UserModel = require('../models').users;

class UserRepository{

    createUser(body){
        return UserModel.create(body);
    }

    fetchUserByEmail(email){
        return UserModel.findOne({where: {email: email}});
    }
}

export default new UserRepository();