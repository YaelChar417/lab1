const express = require('express');
const router = express.Router();

const html_header = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Persona 2</h1>
    <h2>Sinopsis</h2>
    <p><em>Persona 2</em> es un videojuego de rol desarrollado por Atlus y forma parte de la serie <em>Shin Megami Tensei: Persona</em>. Está dividido en dos títulos:</p>
    <ul>
        <li><strong>Persona 2: Innocent Sin (1999)</strong></li>
        <img width="200px" src="https://mollielpatterson.com/wp-content/uploads/2011/09/persona2is.jpg">
        <li><strong>Persona 2: Eternal Punishment (2000)</strong></li>
        <img width="200px" src="https://i.ytimg.com/vi/gVhs53l-T3E/maxresdefault.jpg">
    </ul>
    <p>La historia sigue a un grupo de jóvenes que se enfrentan a fuerzas sobrenaturales después de que un rumor urbano sobre la aparición del <strong>Joker</strong> se vuelve realidad. A medida que los rumores comienzan a materializarse, los protagonistas deben descubrir la verdad detrás del fenómeno mientras enfrentan sus propios miedos y recuerdos reprimidos.</p>
    <h2>Datos Curiosos</h2>
    <ul>
        <li><em>Innocent Sin</em> nunca fue lanzado oficialmente fuera de Japón hasta su remake en PSP en 2011.</li>
        <li><em>Eternal Punishment</em> es una secuela directa y sí fue lanzado en América en PlayStation en el año 2000.</li>
        <li>Fue el primer juego de la saga <em>Persona</em> en incluir el <strong>"Sistema de Rumores"</strong>, donde los rumores podían volverse realidad en el mundo del juego.</li>
        <li>En <em>Innocent Sin</em>, hay un cameo de Hitler como villano, aunque en la versión occidental de PSP fue censurado y se le cambió el nombre a "<strong>Führer</strong>".</li>
        <li>La historia de los juegos tiene conexiones con el primer <em>Persona</em> y deja pistas sobre lo que más tarde sería <em>Persona 3</em>.</li>
    </ul>`;

const html_form = `<h2>Ingrese el nombre de una Persona</h2>
<form action="/persona2/" method="POST">
    <label for="nombreP2">Nombre de la persona</label>
    <input id="nombreP2" type="text" placeholder="Arsene" name="nombreP2">
    <input type="submit" value="Enviar">
    </form>
</body>`;
//Lo que hace el for de label es que al hacer click te manda al input correspondiente
//la etiqueta name hace que al mandar los datos a un servidor lleguen con ese valor, generalmente se pone name e id iguales


const html_footer = `<footer>
<p>pagina hecha por Yael Charles Marin</p>
<p>Construccion de software</p>
</footer></html>`;

const personaNames = [];

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/',(req, res, next) => {
    res.send(html_header + html_form + html_footer);
});

// app.get registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/',(req, res, next) => {
    console.log(req.body);

    personaNames.push(req.body.nombreP2);
    let html = html_header;
    
    for(const persona of personaNames)
    {
        html += `<div>`
        html += persona;
        html += `</div>`
    }
    
    html += html_footer;

    res.send(html);
});

module.exports = router;