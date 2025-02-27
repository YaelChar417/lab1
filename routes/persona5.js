const express = require('express');
const router = express.Router();

const html_header = `<!DOCTYPE html>
<html lang="en" class="theme-dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Persona 5 Royal</title>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
>
</head>
<body>
<div class="content">
<div class="card">
<div class="card-content">
    <h1>Persona 5 Royal</h1>

    <h2>Sinopsis</h2>
    <p>Persona 5 Royal es una versión expandida y mejorada de Persona 5, desarrollada por Atlus y lanzada en 2019 en Japón y en 2020 en Occidente. Esta edición agrega nuevos personajes, eventos, mecánicas y un semestre adicional de historia.</p>
    <p>El juego sigue a un estudiante de secundaria que, tras ser acusado injustamente de un crimen, es transferido a la Academia Shujin en Tokio. Pronto descubre la existencia de un mundo alternativo llamado <strong>Metaverso</strong>, donde los deseos corruptos toman forma en Palacios. Junto a sus amigos, forma el grupo de los <strong>Ladrones Fantasma de Corazones</strong> con el objetivo de reformar a adultos corruptos y cambiar la sociedad.</p>
    <div class="columns">
    <div class="column">
    <figure class="image is-3by2">
        <img src="https://i0.wp.com/thethirstymage.com/wp-content/uploads/2020/06/persona5royal.jpg?fit=2560%2C1440&ssl=1" />
    </figure>
    </div>
    <div class="column">
    <figure class="image is-3by2">
        <img src="https://grahamchapple.com/wp-content/uploads/2020/04/persona-5-royal_20200413201918.jpg"/>
    </figure>
    </div>
    </div>

    <h2>Datos Curiosos</h2>
    <ul>
        <li>Persona 5 Royal introduce a <strong>Goro Akechi</strong>, <strong>Kasumi Yoshizawa</strong> y <strong>Takuto Maruki</strong>, quienes juegan un papel clave en el nuevo contenido.</li>
        <li>A diferencia del juego original, Royal tiene un tercer semestre con una historia completamente nueva y un jefe final exclusivo.</li>
        <li>Los Palacios han sido rediseñados con nuevos desafíos y mecánicas, como el uso del <strong>gancho</strong> para explorar más áreas.</li>
        <li>Se añadieron nuevas animaciones y cinemáticas, haciendo la experiencia aún más inmersiva.</li>
        <li>En 2022, Persona 5 Royal fue relanzado para PlayStation 5, Xbox, Nintendo Switch y PC, con gráficos mejorados y todos los DLC incluidos.</li>
    </ul>
</div>
</div>
</div>`;

const html_form = `<div class="content">
<div class="card">
<div class="card-content">
<h4>Persona 5 Royal esta basado en Tokio, Japón</h4>
<div class="field">
<form action="/persona5/" method="POST">
    <label class="label" for="addrP5">Ingresa un lugar/calle de Tokio</label>
    <input class="input" id="addrP5" type="text" placeholder="Shibuya" name="addrP5">
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

const personaPhotos = [];

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/',(req, res, next) => {
    res.send(html_header + html_form + html_footer);
});

// app.get registra un middleware que solo responde a peticiones HTTP tipo post
router.post('/',(req, res, next) => {
    console.log(req.body);

    personaPhotos.push(req.body.urlP4);
    let html = html_header;
    html += `<div class="columns">`
    for(const img of personaPhotos)
    {
        html += `<div class="column"><figure class="image is-3by2"><img alt="img no soportada" src="`;
        html += img;
        html += `"/></figure></div>`;
    }
    html += `</div>`;
    html += html_footer;

    res.send(html);
});

module.exports = router;