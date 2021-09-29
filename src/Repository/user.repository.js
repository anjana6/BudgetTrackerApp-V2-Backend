
const UserModel = require('../models').users;

class UserRepository{

    createUser(body){
        return UserModel.create(body);
    }
}

export default new UserRepository();