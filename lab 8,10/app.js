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
const html_header = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Holaaaaaaaaaaaaa</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, similique consectetur quis dignissimos repellat non doloribus eum omnis minima eos explicabo tenetur vitae, iste excepturi et eveniet repellendus ratione nesciunt.</p>`;

const html_form = `<form action = "/agregar" method="POST">
    <label for="nombre">Nombre de la planta</label>
    <input id="nombre" type="text" placeholder="Bugambilia" name="nombre">
    <input type="submit" value="Enviar">
    </form>
</body>`;
//Lo que hace el for de label es que al hacer click te manda al input correspondiente
//la etiqueta name hace que al mandar los datos a un servidor lleguen con ese valor, generalmente se pone name e id iguales

const html_footer = `<footer>
<p>pagina hecha por Yael Charles Marin</p>
<p>Construccion de software</p>
</footer></html>`;



const plantas = [];
const server = http.createServer((req, res) => {
    if(req.method == "GET" && (req.url == "/agregar" || req.url == "/"))
    {
        console.log(req.url);
        res.setHeader('Content-Type', 'text/html');
        res.write(html_header + html_form + html_footer);
        res.end();
    }else if(req.method == "POST" && req.url == "/agregar")
    {
        const datos_completos = [];

        req.on('data', (data)=>{
            console.log(data);
            datos_completos.push(data);
        });

        req.on('end', () =>{
            const string_datos_completos = Buffer.concat(datos_completos).toString();
            const planta_name = string_datos_completos.split('=')[1]; 
            console.log(planta_name);

            plantas.push(planta_name);
            res.setHeader('Content-Type', 'text/html');
            res.write(html_header);

            for(const planta of plantas)
            {
                res.write(`<div>`);
                res.write(planta);
                res.write(`</div>`);
            }
            res.write(html_footer);
            res.end();
        });
    }else
    {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write(html_header);
        res.write(`<h1>Esta pagina no existe</h1>`)
        res.write(html_footer)
        res.end();
    }
    
});

server.listen(3000);