const Question = require('../models/Question');

module.exports = {
    async store (req, res) {
        const {description, title} = req.body;

        const question = await Question.create({
            description,
            title,
        });

        return res.json(question);
    },

    async index (req, res){
        const question = await Question.find();

        return res.json(question);
    },

    async show (req, res){
        const {id: _id} = req.params;

        const question = await Question.findOne({_id});

        if(!question){
            return res.status(400).json({message: "The IdQuestion doesn't exists"});
        }  
        
        return res.json(question);
    },

    async update (req, res){
        const {id} = req.params;

        const {description, title} = req.body;

        const question = await Question.findByIdAndUpdate(id,{
            description,
            title,
        });

        return res.json(question);
    },

    async destroy (req, res){
        const {id} = req.params;

        await Question.findByIdAndRemove(id);

        return res.json({message:'delete success!!!'});
    }
}