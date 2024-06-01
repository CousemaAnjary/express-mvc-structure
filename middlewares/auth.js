const jwt = require('jsonwebtoken');
const { secretKey } = require('../config'); // Importer la clé secrète depuis config.js

function auth(req, res, next) {
    const token = req.cookies.authToken;
    if (!token) {
        return res.redirect('/login'); // Rediriger vers login si non connecté
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; // Stocker les informations de l'utilisateur décodées dans la requête
        next(); // Continuer si l'utilisateur est connecté
    } catch (err) {
        res.redirect('/login');
    }
}

function guest(req, res, next) {
    const token = req.cookies.authToken;
    if (token) {
        try {
            jwt.verify(token, secretKey);
            return res.redirect('/admin/dashboard'); // Rediriger vers le dashboard si déjà connecté
        } catch (err) {
            next();
        }
    } else {
        next(); // Continuer si l'utilisateur est un invité
    }
}

module.exports = { auth, guest };
