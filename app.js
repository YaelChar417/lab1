const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({ extended: true }));

const persona2Routes = require('./routes/persona2');
app.use('/persona2', persona2Routes);

const persona3Routes = require('./routes/persona3');
app.use('/persona3', persona3Routes);

const persona4Routes = require('./routes/persona4');
app.use('/persona4', persona4Routes);

const persona5Routes = require('./routes/persona5');
app.use('/persona5', persona5Routes);

const preguntaRoutes = require('./routes/pregunta');
app.use('/preguntas', preguntaRoutes);

// Debe ir al final sino todas las rutas las tomaría como error
app.use((req, res, next) => {
    res.status(404).send('Error 404: Ruta no encontrada');
});

app.listen(3000);