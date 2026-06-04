const bcrypt = require('bcryptjs');
const saltRounds = 10; // Facteur de travail

const hashPassword = async (password) =>  {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('Mot de passe haché :', hashedPassword);
    return hashedPassword;
  } catch (error) {
    console.error('Erreur lors du hachage du mot de passe :', error);
    throw error;
  }
};

hashPassword('1234');