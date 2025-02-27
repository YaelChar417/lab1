const express = require('express');
const router = express.Router();

const html_header = `<!DOCTYPE html>
<html lang="en" class="theme-dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Persona 3 Reload</title>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
>
</head>
<body>
<div class="content">
<div class="card">
<div class="card-content">
    <h1>Persona 3</h1>
    <h2>Sinopsis</h2>
    <p>Persona 3 Reload es un remake del clásicoPersona 3, desarrollado por Atlus y lanzado en 2024. Esta versión moderniza los gráficos, la jugabilidad y la banda sonora, manteniendo la historia original que hizo famoso al título.</p>`;

const html_content= `<p>El juego sigue a un estudiante de secundaria que regresa a su ciudad natal y descubre la existencia de la <strong>Hora Oscura</strong>, un misterioso período de tiempo oculto para la mayoría de las personas. Junto con el grupo SEES (Specialized Extracurricular Execution Squad), el protagonista investiga esta anomalía y enfrenta criaturas llamadas Sombras usando el poder de sus <strong>Personas</strong>.</p>
    <img>
    <div class="columns">
    <div class="column">
    <figure class="image is-3by2">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*9pXztMQMRvpp0PIQcbcY3Q.jpeg" />
    </figure>
    </div>
    <div class="column">
    <figure class="image is-3by2">
        <img src="https://i.ytimg.com/vi/iEcc86nntKQ/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAt6-7nUIsixwdVeMlWuC34i7v6vA" />
    </figure>
    </div>
    </div>

    <h2>Datos Curiosos</h2>
    <ul>
        <li>Persona 3 Reload está desarrollado con el motor Unreal Engine 4, lo que mejora significativamente los gráficos y la iluminación en comparación con versiones anteriores.</li>
        <li>El sistema de combate se ha refinado para parecerse más a Persona 5, con animaciones fluidas y nuevos efectos visuales.</li>
        <li>El juego incluye una banda sonora reimaginada con nuevas versiones de los temas originales, pero manteniendo la esencia del clásico.</li>
        <li>Se han agregado voces completamente nuevas para todos los personajes, con un elenco de actores actualizado.</li>
        <li>A diferencia de Persona 3 Portable, Reload no incluye la ruta de la protagonista femenina.</li>
    </ul>
</div>
</div>
</div>`;
//Lo que hace el for de label es que al hacer click te manda al input correspondiente
//la etiqueta name hace que al mandar los datos a un servidor lleguen con ese valor, generalmente se pone name e id iguales


const html_footer = `<footer class="footer">
<div class="content has-text-centered">
<p>pagina hecha por Yael Charles Marin</p>
<p>Construccion de software</p>
</div></footer></html>`;

const persona3Characters = [
    "Makoto Yuki (Protagonista)",
    "Yukari Takeba",
    "Junpei Iori",
    "Akihiko Sanada",
    "Mitsuru Kirijo",
    "Fuuka Yamagishi",
    "Aigis",
    "Ken Amada",
    "Shinjiro Aragaki",
    "Koromaru"];

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/',(req, res, next) => {
    let html_characters = `<div class="columns">`;
    for(const character of persona3Characters)
    {
        html_characters += `<div class="column">`;
        html_characters += character;
        html_characters += `</div>`;
    }
    html_characters += `</div>`;
    res.send(html_header + html_content + html_characters + html_footer);
});

module.exports = router;