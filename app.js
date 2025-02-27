const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const persona2Routes = require('./routes/persona2');
app.use('/persona2', persona2Routes);

const persona3Routes = require('./routes/persona3');
app.use('/persona3', persona3Routes);

const persona4Routes = require('./routes/persona4');
app.use('/persona4', persona4Routes);

const persona5Routes = require('./routes/persona5');
app.use('/persona5', persona5Routes);

app.listen(3000);