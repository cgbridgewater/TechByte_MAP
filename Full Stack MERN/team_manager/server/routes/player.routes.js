const PlayerController = require('../controllers/player.controller');

module.exports = (app) => {
    // app.get('/api', PlayerController.index);
    app.get('/api/player', PlayerController.getAll);
    app.get('/api/player/:id', PlayerController.getOne);
    app.post('/api/player', PlayerController.create);
    app.put('/api/player/:id', PlayerController.update);
    app.delete('/api/player/:id', PlayerController.delete);
}