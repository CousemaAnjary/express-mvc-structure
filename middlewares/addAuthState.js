const jwt = require('jsonwebtoken');
const { secretKey } = require('../config'); // Importer la clé secrète depuis config.js

function addAuthState(req, res, next) {
    const token = req.cookies.authToken; // Lire le cookie authToken
    if (token) {
        try {
            const decoded = jwt.verify(token, secretKey);
            res.locals.isLoggedIn = true;
            res.locals.userId = decoded.userId;
        } catch (err) {
            res.locals.isLoggedIn = false;
        }
    } else {
        res.locals.isLoggedIn = false;
    }
    next();
}

module.exports = addAuthState;
