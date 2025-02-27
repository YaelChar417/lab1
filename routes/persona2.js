const express = require('express');
const router = express.Router();

const html_header = `<!DOCTYPE html>
<html lang="en" class="theme-dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Persona 2</title>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
>
</head>
<body>
<div class="content">
<div class="card">
<div class="card-content">
    <h1>Persona 2</h1>
    <h2>Sinopsis</h2>
    <p>Persona 2 es un videojuego de rol desarrollado por Atlus y forma parte de la serie Shin Megami Tensei: Persona. Está dividido en dos títulos:</p>

    <ul>
        <li><strong>Persona 2: Innocent Sin (1999)</strong></li>
        <img width="200px" src="https://mollielpatterson.com/wp-content/uploads/2011/09/persona2is.jpg">
        <li><strong>Persona 2: Eternal Punishment (2000)</strong></li>
        <img width="200px" src="https://i.ytimg.com/vi/gVhs53l-T3E/maxresdefault.jpg">
    </ul>
    <p>La historia sigue a un grupo de jóvenes que se enfrentan a fuerzas sobrenaturales después de que un rumor urbano sobre la aparición del <strong>Joker</strong> se vuelve realidad. A medida que los rumores comienzan a materializarse, los protagonistas deben descubrir la verdad detrás del fenómeno mientras enfrentan sus propios miedos y recuerdos reprimidos.</p>
    <h2>Datos Curiosos</h2>
    <ul>
        <li>Innocent Sin nunca fue lanzado oficialmente fuera de Japón hasta su remake en PSP en 2011.</li>
        <li>Eternal Punishment es una secuela directa y sí fue lanzado en América en PlayStation en el año 2000.</li>
        <li>Fue el primer juego de la saga Persona en incluir el <strong>"Sistema de Rumores"</strong>, donde los rumores podían volverse realidad en el mundo del juego.</li>
        <li>En Innocent Sin, hay un cameo de Hitler como villano, aunque en la versión occidental de PSP fue censurado y se le cambió el nombre a "<strong>Führer</strong>".</li>
        <li>La historia de los juegos tiene conexiones con el primer Persona y deja pistas sobre lo que más tarde sería Persona 3.</li>
    </ul>
</div>
</div>
</div>`;

const html_form = `<div class="content">
<div class="card">
<div class="card-content">
<h2>Ingrese el nombre de una Persona</h2>
<div class="field">
<form action="/persona2/" method="POST">
    <label class="label" for="nombreP2">Nombre de la persona</label>
    <input class="input" id="nombreP2" type="text" placeholder="Arsene" name="nombreP2">
    <button class="button is-link" type="submit">Buscar</button>
    </form>
    </div>
</div>
</div>
</div>
</body>`;
//Lo que hace el for de label es que al hacer click te manda al input correspondiente
//la etiqueta name hace que al mandar los datos a un servidor lleguen con ese valor, generalmente se pone name e id iguales


const html_footer = `<footer class="footer">
<div class="content has-text-centered">
<p>pagina hecha por Yael Charles Marin</p>
<p>Construccion de software</p>
</div></footer></html>`;

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
    html += `<div class="columns">`
    for(const persona of personaNames)
    {
        html += `<div class="column">`
        html += persona;
        html += `</div>`
    }
    html += `</div>`;
    html += html_footer;

    res.send(html);
});

module.exports = router;