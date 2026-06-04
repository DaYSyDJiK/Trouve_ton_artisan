const { Admin } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    // Récupérer email et password depuis req.body
    const { email, password } = req.body;
    // Vérifier que les champs sont présents
    if (!email || !password) {
        return res.status(400).json({ message: "Email et mot de passe sont requis" });
    }
    // Chercher l'admin avec cet email
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
        return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }
    // Vérifier le mot de passe 
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }
    // Générer un token JWT
    const token = jwt.sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // Retourner le token
    res.json({ token });
}

module.exports = { login };