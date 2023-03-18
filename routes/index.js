const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/index')

router.get('/',IndexController.index);

router.get('/products',IndexController.ListOfProducts);

router.post('/new-product',IndexController.NewProduct);

module.exports = router;