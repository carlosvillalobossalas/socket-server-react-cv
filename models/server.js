//Servidor de Express
const Sockets = require('./sockets');
const express = require('express')
const socketIo = require('socket.io');
const http = require('http');
const path = require('path');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        //Http Server
        this.server = http.createServer(this.app);
        //Configuraciones de sockets
        this.io = socketIo(this.server, {/* configuraciones */ });
    }

    middlewares() {
        this.app.use(express.static(path.resolve(__dirname, '../public')))
    }

    configurarSockets() {
        new Sockets(this.io);
    }

    execute() {

        //Inicializar Middlewares
        this.middlewares();

        //Inicializar sockets;
        this.configurarSockets();

        //Inicializar Server
        this.server.listen(this.port, () => {
            console.log('Server corriendo en puerto: ', this.port)
        });
    }
}

module.exports = Server;