const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Middleware para servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Evento de conexão de cliente
io.on('connection', (socket) => {
    console.log('Novo cliente conectado:', socket.id);

    // Receber uma mensagem do cliente e retransmitir
    socket.on('chatMessage', (msg) => {
        console.log('Mensagem recebida:', msg);
        io.emit('message', msg);  // Enviar a mensagem para todos os clientes conectados
    });

    // Evento quando o cliente se desconecta
    socket.on('disconnect', () => {
        console.log('Cliente desconectado:', socket.id);
    });
});

// Definir a porta e iniciar o servidor
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

