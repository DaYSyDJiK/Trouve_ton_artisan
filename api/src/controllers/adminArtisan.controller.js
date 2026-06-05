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

module.exports = { deleteArtisan };