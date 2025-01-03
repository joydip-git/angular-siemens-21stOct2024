const dotenv = require('dotenv')
const { Router } = require('express')
const { fetchProduct, deleteProduct, fetchProducts, insertProduct, modifyProduct } = require('../controller/productController');
const { authenticateUserHandler, registerUserHandler } = require('../controller/usersController')
const { verifyToken } = require('../middleware/authmiddleware');

const routerMiddleware = Router();

dotenv.config()
const productBaseUrl = process.env.PRODUCTS_BASE_URL;
const authBaseUrl = process.env.AUTH_BASE_URL;

routerMiddleware.post(`${authBaseUrl}/login`, authenticateUserHandler)
routerMiddleware.post(`${authBaseUrl}/register`, registerUserHandler)

//using auth (uncomment in case you want to use auth)

routerMiddleware.get(`${productBaseUrl}`, verifyToken, fetchProducts);
routerMiddleware.get(`${productBaseUrl}/:id`, verifyToken, fetchProduct);
routerMiddleware.post(`${productBaseUrl}`, verifyToken, insertProduct);
routerMiddleware.put(`${productBaseUrl}/:id`, verifyToken, modifyProduct);
routerMiddleware.delete(`${productBaseUrl}/:id`, verifyToken, deleteProduct);

//not using auth (uncomment in case you DO NOT want to use auth)

// routerMiddleware.get(`${productBaseUrl}`, fetchProducts);
// routerMiddleware.get(`${productBaseUrl}/:id`, fetchProduct);
// routerMiddleware.post(`${productBaseUrl}`, insertProduct);
// routerMiddleware.put(`${productBaseUrl}/:id`, modifyProduct);
// routerMiddleware.delete(`${productBaseUrl}/:id`, deleteProduct);

module.exports = routerMiddleware