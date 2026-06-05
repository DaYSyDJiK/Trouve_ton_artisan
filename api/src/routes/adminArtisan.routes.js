const router = require('express').Router();
const requireAdmin = require('../middlewares/requireAdmin');
const adminArtisanController = require('../controllers/adminArtisan.controller');
const { Artisan } = require('../models');

// DELETE /admin/artisans/:id
router.delete('/:id', requireAdmin, adminArtisanController.deleteArtisan);






module.exports = router;