const User = require('../models/User');

module.exports = {
    async store (req, res) {
        const {first_name, last_name, user_name, password} = req.body;

        const password_hash = password + '123';

        const userExist = await User.findOne({ user_name });

        if(userExist){
            return res.status(400).json({message: "Username already exists"});
        }

        const user = await User.create({
            first_name,
            last_name,
            user_name,
            password_hash,
        });

        return res.json(user);
    },

    async index (req, res){
        const users = await User.find();

        return res.json(users);
    }
}