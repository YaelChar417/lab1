const personaNames = [];

exports.get = (req, res, next) => {
    res.render('agregar_persona2');
};

exports.post_agregar = (req, res, next) => {
    console.log(req.body);

    personaNames.push(req.body.nombreP2);

    res.render('lista_persona2', {
        personas: personaNames,
    });
};