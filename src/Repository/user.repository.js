
const UserModel = require('../models').users;

class UserRepository{

    createUser(body){
        console.log(body);
        return UserModel.create(body);
    }
}

export default new UserRepository();