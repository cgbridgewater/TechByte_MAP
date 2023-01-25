const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/api', UserController.index);
    app.get('/api/user', UserController.getAll);
    app.get('/api/user/:id', UserController.getOne);
    app.post('/api/user', UserController.create);
    app.put('/api/user/:id', UserController.update);
    app.delete('/api/user/:id', UserController.delete)
}
