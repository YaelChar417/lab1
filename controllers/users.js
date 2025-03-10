exports.get_login = (req, res, next) => {
    res.render('usuario_login', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
        isNew: false,
    });
};

exports.get_logout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/users/login');
    })
};

exports.post_login = (req, res, next) => {
    req.session.isLoggedIn = true;
    req.session.username = req.body.username;
    res.redirect('/persona2/agregar');
};

exports.get_signup = (req, res, next) => {
    res.render('usuario_login', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
        isNew: true,
    });
};

exports.post_signup = (req, res, next) => {

};