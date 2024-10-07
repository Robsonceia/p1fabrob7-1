const validateUserRegistration = (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Por favor, forneça nome, e-mail e senha.' });
    }
   
    next();
};

module.exports = { validateUserRegistration };
