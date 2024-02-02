const UserController = require ('../controllers/user.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    // app.get('/api/user', authenticate, UserController.cookieTester);   // DO I NEED THIS??? TEST AT FINAL
    app.get('/api/allusers', UserController.findAll);
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);
    app.get('/api/user/profile', authenticate, UserController.getOne);
    // app.put('/api/user/:id', UserController.update);  // created for expansion
    app.delete('/api/user/delete', authenticate, UserController.deleteUser);  // created for expansion 
}