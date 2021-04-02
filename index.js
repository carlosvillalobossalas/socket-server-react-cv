const Server = require("./models/server");
require('dotenv').config();

const server = new Server();

server.execute();

/*  
//Desplegar el directorio publico


//socket === cliente conectado; del lado del servidor
// io.on('connection', (socket) => {
//     //emitir
//     // socket.emit('mensaje-bienvenida', {
//     //     msg: 'Bienvenido al server',
//     //     fecha: new Date()
//     // });

//     //escuchar
//     socket.on('mensaje-to-server', (data) => {
//         console.log(data);

//         //socket para enviar el mensaje solo al cliente
//         // socket.emit('mensaje-from-server', data);

//         //io para enviar el mensaje a todos los clientes
//         io.emit('mensaje-from-server', data);

//     })
// });
*/
