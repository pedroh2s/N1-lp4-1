const { Router } = require('express');

const UserController = require('./controllers/UserController');
const QuestionController = require('./controllers/QuestionController');

const routes = Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);
routes.get('/users/:id', UserController.show);

routes.post('/questions', QuestionController.store);
routes.get('/questions', QuestionController.index);
routes.put('/questions/:id', QuestionController.update);
routes.delete('/questions/:id', QuestionController.destroy);
routes.get('/questions/:id', QuestionController.show);

module.exports = routes;
