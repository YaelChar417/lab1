const file_system = require('fs');

file_system.writeFileSync('hola.txt', 'holaaaa desde node');

const arreglo = [5000, 1, 19, 258, 417, 88, 999, 1027, 587];

for(let item of arreglo)
{
    setTimeout(() => {
        console.log(item);
    }, item);
} 

const http = require('http');
const server = http.createServer( (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1>Hola mundo !</h1>");
    response.end();
});

console.log("Escuchando puerto 3000")
server.listen(3000);