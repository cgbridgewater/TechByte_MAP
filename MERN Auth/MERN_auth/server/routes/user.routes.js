const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    // app.get('/api', UserController.index);
    app.get('/api/user', UserController.getAll);
    app.post('/api/register', UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/logout', UserController.logout);
    app.get('/api/user/:id', UserController.getOne);
    // app.post('/api/user', UserController.create);
    app.put('/api/user/:id', UserController.update);
    app.delete('/api/user/:id', UserController.delete)
}
