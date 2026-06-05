const { Artisan } = require("../models");

const deleteArtisan = async (req, res) => {
    const { id } = req.params;
    try {
        const artisan = await Artisan.findByPk(id);
        if (!artisan){
            return res.status(404).json({ message : 'Artisan non trouvé' });
        }
        await artisan.destroy();
        return res.status(200).json({ message : 'Artisan supprimé' });
    } catch (error) {
        return res.status(500).json({ message : 'Erreur serveur' });
    }
}

const createArtisan = async (req, res) => {
    const { nom, note, ville, description, email, siteWeb, image, isTop, specialiteId } = req.body;
    
    if (!nom || !ville || !description || !email || !specialiteId) {
        return res.status (400).json({ message : 'Champs requis manquants' });
    }
    try {
        const newArtisan = await Artisan.create({ nom, note, ville, description, email, siteWeb, image, isTop, specialiteId });
        return res.status(201).json(newArtisan);
    } catch (error) {
        return res.status(500).json({ message : 'Erreur serveur' });
    }
}

const updateArtisan = async (req, res) => {
    const { id } = req.params;
    const { nom, note, ville, description, email, siteWeb, image, isTop, specialiteId } = req.body;
    try {
        const artisan = await Artisan.findByPk(id);
        if (!artisan){
            return res.status(404).json({ message : 'Artisan non trouvé' });
        }
        await artisan.update({ nom, note, ville, description, email, siteWeb, image, isTop, specialiteId });
        return res.status(200).json(artisan);
    } catch (error) {
        return res.status(500).json({ message : 'Erreur serveur' });
    }
}

module.exports = { deleteArtisan, createArtisan, updateArtisan };