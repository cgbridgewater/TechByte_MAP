const UserController = require ('../controllers/user.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
 // app.get('/api/user', authenticate, UserController.findAll);  // created for expansion
 app.get('/api/user', authenticate, UserController.cookieTester);
 app.post('/api/register', UserController.register);
 app.post('/api/login', UserController.login);
 app.get('/api/logout', UserController.logout);
 app.get('/api/user/:id', authenticate, UserController.getOne);
 // app.put('/api/user/:id', UserController.update);  // created for expansion
 // app.delete('/api/user/:id', UserController.delete);  // created for expansion 
}