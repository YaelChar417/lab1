const express = require('express');
const app = express();

//Middleware
app.use((req, res, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

app.use((req, res, next) => {
    console.log('Otro middleware!');

    //Manda la respuesta
    res.send('¡Hola mundo!'); 
});

app.listen(3000);