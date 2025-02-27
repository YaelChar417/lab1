const express = require('express');
const router = express.Router();

const html_header = `<!DOCTYPE html>
<html lang="en" class="theme-dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pregunta lab11</title>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
>
</head>
<body>
<div class="content">
<div class="card">
<div class="card-content">
    <h1>Preguntas a responder:</h1>
    <h2>Describe el archivo package.json:</h2>
    <p></p>
    <h2>Fuentes bibliograficas:</h2>
    <p></p>`;

const html_footer = `<footer class="footer">
<div class="content has-text-centered">
<p>pagina hecha por Yael Charles Marin</p>
<p>Construccion de software</p>
</div></footer></html>`;

// app.get registra un middleware que solo responde a peticiones HTTP tipo GET
router.get('/',(req, res, next) => {
    res.send(html_header + html_footer);
});

module.exports = router;