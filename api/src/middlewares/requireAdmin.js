const jwt = require('jsonwebtoken');

function requireAdmin(req, res, next) {
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader) {
        return res.status(401).json({ message: 'Non autorisé' });
    }
    try {
        const token = authorizationHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token invalide' });
    }
}

module.exports = requireAdmin;