exports.get_preguntas = (req, res, next) => {
    res.render('ver_preguntas', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
    })
}