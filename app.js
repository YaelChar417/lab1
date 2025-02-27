const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const persona2Routes = require('./routes/persona2');
app.use('/persona2', persona2Routes);


app.listen(3000);