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

exports.get = (req, res, next) => {
    res.render('ver_persona3', {
        characters: persona3Characters,
        isLoggedIn: req.session.isLoggedIn || false,
        username: req.session.username || '',
    });
};