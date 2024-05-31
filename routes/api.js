const express = require("express");
const router = express.Router();
const { auth } = require('../middlewares/auth');

// // Importation des contrôleurs
// const ProductController = require("../controllers/Backend/ProductController");
// const RegisterUserController = require("../controllers/Auth/RegisterUserController");
// const AuthenticatedSessionController = require("../controllers/Auth/AuthenticatedSessionController");

// // Routes d'API pour l'authentification
// router.post("/register", RegisterUserController.store);
// router.post("/login", AuthenticatedSessionController.store);

// // Routes d'API pour les produits
// router.get('/products', auth, ProductController.index);
// router.post('/products', auth, ProductController.store);
// router.put('/products/:id', auth, ProductController.update);
// router.delete('/products/:id', auth, ProductController.delete);

module.exports = router;