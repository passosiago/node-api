const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productController');

router.get('/products', productsController.showAll);
router.get('/products/:id', productsController.showOne);
router.post('/products', productsController.create);
router.put('/products/:id', productsController.update);
router.delete('/products/:id', productsController.remove);

module.exports = router;