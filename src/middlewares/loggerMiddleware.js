const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Continuar para a próxima função middleware ou rota
};

module.exports = { logger };
