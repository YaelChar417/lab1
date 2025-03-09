const db = require('../util/database');

module.exports = class Album {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_url) {
        this.url = mi_url;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO persona4(url) VALUES (?)', [this.url]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM persona4');
    }

    static fetchOne(id){
        return db.execute('SELECT * FROM persona4 WHERE id = ?', [id]);
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
};