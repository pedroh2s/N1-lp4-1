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

    async update (req, res){
        const question = await Question.findByIdAndUpdate({
            _id: req.params.id,
            description,
            title,
        });

        return res.json(question);
    },

    async destroy (req, res){
        const question = await Question.findByIdAndRemove({
            _id: req.params.id,
        });

        return res.json(question);
    }
}