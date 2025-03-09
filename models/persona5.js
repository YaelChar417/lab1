const db = require('../util/database');

module.exports = class Place {
    constructor(mi_nombre){
        this.nombre = mi_nombre;
    }
    
    save(){
        return db.execute('INSERT INTO persona5(nombre) VALUES (?)', [this.nombre]);
    }

    static fetchAll(){
        return db.execute('SELECT * FROM persona5');
    }

    static fetchOne(id){
        return db.execute('SELECT * FROM persona5 WHERE id = ?', [id]);
    }

    static fecth(id){
        if(id)
        {
            return this.fetchOne(id);
        }else
        {
            return this.fetchAll();
        }
    }
};
