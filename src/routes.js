const {Router} = require('express');

const UserController = require('./controllers/UserController');

const QuestionController = require('./controllers/QuestionController');

const routes = Router();

routes.post('/users', UserController.store);

routes.get('/users', UserController.index);

routes.post('/questions', QuestionController.store);

routes.get('/questions', QuestionController.index);

module.exports = routes;