const express = require("express");
const router = express.Router();
const { auth, guest } = require('../middlewares/auth');

// Importation des contrôleurs


// Définition des routes
router.get("/", (req, res) => {
  res.render("app");
});


module.exports = router;
