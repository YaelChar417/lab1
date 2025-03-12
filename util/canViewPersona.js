module.exports = (req, res, next) => {
    for(let privilegio of req.session.privilegios)
    {
        if(privilegio.nombre == 'ver_persona2')
        {
            return next();
        }
    }
    return res.status(403).send('Tus acciones han sido registradas e infromadas')
}