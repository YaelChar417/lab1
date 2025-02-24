// Ejercicio 1:
const array = [1, 9, 10, 7, 8, 5, 12, 11, 17, 20];

const getMedia = (array) => {
    let tam = array.length;
    let sum = 0;
    for(let i = 0; i < tam; i++)
    {
        sum += array[i];
    }
    return sum / tam;
};

console.log("El promedio es: ", getMedia(array));

// Ejercicio 2:
const text = "Me gusta la pizza sin piña";
const fs = require('fs');
fs.writeFileSync('hola.txt', text);
console.log('El mensaje escrito fue: ', text);

class Cuadrado{
    constructor(nombre, lado){
        this.nombre = nombre;
        this.lado = lado;
    }

    calcularArea(){
        return this.lado * this.lado;
    }

    calcularPerimetro(){
        return this.lado * 4;
    }

    toString(){
        return `Hola soy el cuadrado ${this.nombre} con lado ${this.lado} cm`;
    }
}

const cuadrado = new Cuadrado("Rex", 10.5);
console.log(cuadrado.toString());
console.log("Area: " + cuadrado.calcularArea());
console.log("Perimetro: " + cuadrado.calcularPerimetro());

// Dirigir al usuario a una pagina web
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(302, { 'Location': 'https://yaelchar417.github.io/familiaElric/' });
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
});

server.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:3000`);
});