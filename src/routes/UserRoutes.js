const express = require('express');
const userController = require('../controllers/UserController');
const router = express.Router();

router.get('/users', userController.index);      // Listar todos os usuários
router.get('/users/:id', userController.show);   // Mostrar um usuário específico
router.post('/users', userController.store);     // Criar um novo usuário
router.put('/users/:id', userController.update); // Atualizar um usuário
router.delete('/users/:id', userController.delete); // Deletar um usuário

module.exports = router;

