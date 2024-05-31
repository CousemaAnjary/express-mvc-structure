// Middleware/AddAuthState.js

function addAuthState(req, res, next) {
    res.locals.isLoggedIn = req.session.isLoggedIn || false;
    next();
}

module.exports = addAuthState;  // Assurez-vous que c'est bien exporté comme cela
