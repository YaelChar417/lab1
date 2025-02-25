const express = require('express');
const app = express();

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

const html_form = `<form action="/plantas/agregar" method="POST">
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

//Middleware
app.use((req, res, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

app.use('/plantas/agregar',(req, res, next) => {
    res.send(html_header + html_form + html_footer)
});

app.use((req, res, next) => {
    console.log('Otro middleware!');

    //Manda la respuesta
    res.send('¡Hola mundo!'); 
});

app.listen(3000);