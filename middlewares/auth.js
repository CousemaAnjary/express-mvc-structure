// middlewares/auth.js

function auth(req, res, next) {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login'); // Rediriger vers login si non connecté
    }
    next(); // Continuer si l'utilisateur est connecté
}

function guest(req, res, next) {
    if (req.session.isLoggedIn) {
        return res.redirect('/admin/dashboard'); // Rediriger vers le dashboard si déjà connecté
    }
    next(); // Continuer si l'utilisateur est un invité
}

module.exports = { auth, guest };
