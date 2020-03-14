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
    },

    async show(req, res){
        const {id: _id} = req.params;

        const user = await User.findOne({_id});

        if(!user){
            return res.status(400).json({message: "The idUser doesn't exists"});
        }

        return res.json(user);
    },

    async update (req, res){
        const {id} = req.params;

        const {first_name, last_name, user_name, password} = req.body;

        const password_hash = password + '123';

        const userExist = await User.findOne({ user_name });

        if(userExist){
            const user = await User.findByIdAndUpdate(id,{
                first_name,
                last_name,
                user_name,
                password_hash,
            });

            return res.json(user);
        }        

        return res.status(400).json({message: "The User doesn't exists"});
    },
    
    async destroy (req, res){
        const {id} = req.params;

        await User.findByIdAndRemove(id);

        return res.json({message: 'delete success!!!'});
    }    
}