const express = require('express');
const router = express.Router();;

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
    res.render('ver_persona3', {
        characters: persona3Characters,
    })
});

module.exports = router;