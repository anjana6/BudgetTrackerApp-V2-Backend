import userRepository from "../Repository/user.repository";

class UserService{
    createUser(requestbody){
        return userRepository.createUser(requestbody)
    }

    logingUser(requestbody){

    }
}

export default new UserService;