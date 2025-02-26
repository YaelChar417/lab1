const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const plantasRoutes = require('./routes/plantas');
app.use('/plantas', plantasRoutes);


app.listen(3000);