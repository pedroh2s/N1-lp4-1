const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    description: String,
    title: String,
});

module.exports = mongoose.model('Question', QuestionSchema);