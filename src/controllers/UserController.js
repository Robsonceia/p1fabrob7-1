const userService = require("../services/UserService");

class UserController {
    // Listar todos os usuários (GET /users)
    async index(request, response) {
        try {
            const users = await userService.getAllUsers();
            response.status(200).json(users);
        }
        catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    // Exibir um usuário específico (GET /users/:id)
    async show(request, response) {
        try {
            const { id } = request.params;
            const user = await userService.getUserById(id);

            if (!user) {
                return response.status(404).json({ message: 'Usuário não encontrado' });
            }

            response.status(200).json(user);
        }
        catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    // Criar um novo usuário (POST /users)
    async store(request, response) {
        try {
            const { name, email, password } = request.body;

            // Validação de entrada
            if (!name || !email || !password) {
                return response.status(400).json({ message: 'Por favor, forneça nome, e-mail e senha' });
            }

            const newUser = await userService.createUser({ name, email, password });
            response.status(201).json(newUser);
        }
        catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    // Atualizar um usuário existente (PUT /users/:id)
    async update(request, response) {
        try {
            const { id } = request.params;
            const { name, email, password } = request.body;

            const updatedUser = await userService.updateUser(id, { name, email, password });

            if (!updatedUser) {
                return response.status(404).json({ message: 'Usuário não encontrado' });
            }

            response.status(200).json(updatedUser);
        }
        catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    // Deletar um usuário (DELETE /users/:id)
    async delete(request, response) {
        try {
            const { id } = request.params;

            const deletedUser = await userService.deleteUser(id);

            if (!deletedUser) {
                return response.status(404).json({ message: 'Usuário não encontrado' });
            }

            response.status(200).json({ message: 'Usuário deletado com sucesso' });
        }
        catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
}

// Singleton
module.exports = new UserController();

