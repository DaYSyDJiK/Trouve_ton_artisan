const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const requireAdmin = require('../middlewares/requireAdmin');

// POST /auth/login
router.post('/login', authController.login);

router.get('/test', requireAdmin, authController.test);

module.exports = router;