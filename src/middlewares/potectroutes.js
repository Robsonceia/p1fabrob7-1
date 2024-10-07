const express = require('express');
const { protect } = require('./middlewares/authmiddleware');
const router = express.Router();

router.get('/perfil', protect, (req, res) => {
    res.json({ message: `Bem-vindo, usuário ${req.user}!` });
});

module.exports = router;
