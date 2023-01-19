const ItemController = require('../controllers/item.controller');

module.exports = (app) => {
    app.get('/api', ItemController.index);
    app.get('/api/item', ItemController.getAllItems);
    app.get('/api/item/:id', ItemController.getOneItem);
    app.post('/api/item', ItemController.createItem);
    app.put('/api/item/:id', ItemController.updateItem);
    app.delete('/api/item/:id', ItemController.deleteItem)
}
 