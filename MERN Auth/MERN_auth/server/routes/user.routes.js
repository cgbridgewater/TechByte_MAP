const UserController = require('../controllers/user.controller');
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.get('/api/user', authenticate, UserController.findAll);
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);
    // app.post('/api/user', UserController.create);
    app.get('/api/user/:id', UserController.getOne);
    app.put('/api/user/:id', UserController.update);
    app.delete('/api/user/:id', UserController.delete)
}
