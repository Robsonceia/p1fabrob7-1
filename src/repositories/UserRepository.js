const User = require("../models/UserModel");

class UserRepository {
    async getAllUsers(){
        return await UserRepository.find()
    }
    async getUserByID(id){
        return await User.findById(id)
    }
    async getUserByEmail(email){
        return await User.findOne(email)
    }
    async createUser(userData){
        const user = new User(userData);
        return await user.save()
    }

    // update e delete
}

//singleton

module.exports = new UserRepository();
