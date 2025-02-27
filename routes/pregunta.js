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
    <p>El package.json es un archivo de mucha importancia cuando se usa node.js, ya que este se necesita para definir  y manejar las características de un proyecto desarrollado con este entorno. Como lo indica su nombre tiene una estructura en formato JSON, JavaScript Object Notation y contiene datos como el nombre, version, licencia, autor y mucho más del proyecto.</p>
    <p>En el package.json también se pueden definir scripts que faciliten la ejecución de tares comunes en el proyecto ,como iniciar el servidor, compilar codigo o ejecutar pruebas, etc, que pueden ser llamados con el comando <strong>npm run </strong></p>
    <p>Por último, generalmente el archivo package.json no se incluye en los repositorios de github incluso cuando es muy importante, esto se debe principalmente a dos razones:</p>
    <ul>
        <li>Reducir el tamaño del repositorio, ya que es un archivo que esta en constante cambio</li>
        <li>Facil de generar, cualquiera puede ejecutar el comando npm install para descargar las dependencias</li>
    </ul>
    <h2>Fuentes bibliograficas:</h2>
    <p>Casero, A. (2024, 18 marzo). La importancia del package.json | KeepCoding Bootcamps. KeepCoding Bootcamps. <a target="_blank" href="https://keepcoding.io/blog/la-importancia-del-package-json/">https://keepcoding.io/blog/la-importancia-del-package-json/</a></p>`;

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