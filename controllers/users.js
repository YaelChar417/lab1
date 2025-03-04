exports.get_login = (req, res, next) => {
    res.render('usuario_login');
};

exports.post_login = (req, res, next) => {
    req.session.username = req.body.username;
    res.redirect('/persona2')
};