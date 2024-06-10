const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/products.controller');
const verifyToken = require('../moddlewares/verifyToken');

// get all products
// add new product
router.route('/')
        .get(productControllers.getAllProducts)
        .post(productControllers.addNewProduct)

        // .get(verifyToken,userControllers.getAllUsers)

router.route('/:id')
        .get(productControllers.getOnlyProduct)
        .patch(productControllers.updateProduct)

module.exports = router;