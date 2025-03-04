const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

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

const pruebaRoutes = require('./routes/prueba12');
app.use('/static', pruebaRoutes);

// Debe ir al final sino todas las rutas las tomaría como error
app.use((req, res, next) => {
    res.status(404).send('Error 404: Ruta no encontrada');
});

app.listen(3000);