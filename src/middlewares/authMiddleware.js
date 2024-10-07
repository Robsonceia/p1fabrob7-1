const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    // Obter o token do cabeçalho de autorização
    let token = req.headers.authorization;

    if (token && token.startsWith('Bearer')) {
        try {
            // Remover o prefixo 'Bearer' e verificar o token
            token = token.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Anexar o id do usuário no objeto req para usá-lo nas rotas
            req.user = decoded.id;
            next();
        } catch (error) {
            res.status(401).json({ message: 'Token inválido. Não autorizado.' });
        }
    } else {
        res.status(401).json({ message: 'Nenhum token encontrado. Não autorizado.' });
    }
};

module.exports = { protect };
