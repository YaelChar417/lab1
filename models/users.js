const db = require('../util/database')
const bcrypt = require('bcryptjs')

module.exports = class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    save(){
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute('INSERT INTO usuarios(username, password) VALUES (?, ?)', 
                [this.nombre, password_cifrado]);
        })
        .catch((err) => {
            console.log(err);
        });
    };
    
    static fetchAll(){
        return db.execute('SELECT * FROM usuarios');
    }
    
    static fetchOne(id){
        return db.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
    }
    
    static fetch(id){
        if(id)
        {
            return this.fetchOne(id);
        }else
        {
            return this.fetchAll();
        }
    }
}