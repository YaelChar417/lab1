exports.get_login = (req, res, next) => {
    res.render('usuario_login', {
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
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
    res.redirect('/persona2')
};