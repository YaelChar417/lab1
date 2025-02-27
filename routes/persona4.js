const express = require('express');
const router = express.Router();

const html_header = `<!DOCTYPE html>
<html lang="en" class="theme-dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Persona 4 Golden</title>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
>
</head>
<body>
<div class="content">
<div class="card">
<div class="card-content">
    <h1>Persona 4 Golden</h1>

    <h2>Sinopsis</h2>
    <p>Persona 4 Golden es una versión mejorada del juego Persona 4, desarrollado por Atlus. Lanzado originalmente en 2012 para PlayStation Vita, esta edición expande la historia, agrega nuevos personajes y mejoras en la jugabilidad.</p>
    <p>El juego sigue a un estudiante de secundaria que se muda a la tranquila ciudad rural de <strong>Inaba</strong>. Poco después de su llegada, una serie de asesinatos misteriosos comienza a ocurrir, y el protagonista descubre la existencia de un mundo alternativo dentro de la televisión. Junto a sus amigos, forma el <strong>Investigation Team</strong> para resolver el caso mientras enfrentan sus propias sombras y desarrollan sus Personas.</p>

    <h2>Datos Curiosos</h2>
    <ul>
        <li>Persona 4 Golden introdujo a <strong>Marie</strong>, un nuevo personaje con su propia historia y eventos adicionales.</li>
        <li>A diferencia del original, esta versión tiene múltiples mejoras en la jugabilidad, como más actividades en el mundo y nuevas opciones de social link.</li>
        <li>La historia está inspirada en casos reales de asesinatos en zonas rurales de Japón.</li>
        <li>Uno de los finales del juego es tan difícil de desbloquear que muchos jugadores no saben que existe.</li>
        <li>El juego recibió una remasterización para PC, PlayStation 4, Xbox y Nintendo Switch en 2023, permitiendo a más jugadores experimentarlo.</li>
    </ul>
</div>
</div>
</div>`;

const html_form = `<div class="content">
<div class="card">
<div class="card-content">
<h2>Ingrese la url de una imagen de Persona 4</h2>
<div class="field">
<form action="/persona4/" method="POST">
    <label class="label" for="urlP4">Url de imagen</label>
    <input class="input" id="urlP4" type="text" placeholder="https://i.redd.it/a3598fe3gvjb1.jpg" name="urlP4">
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