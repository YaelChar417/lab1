const db = require("../util/database");

module.exports = class Persona {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        return db.execute("CALL createPersona2(?)", [this.nombre]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute("CALL fetchAllP2()");
    }

    static fetchOne(id) {
        return db.execute("CALL fetchOneP2(?)", [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
};
