const db = require("../util/database");

module.exports = class Album {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_url) {
        this.url = mi_url;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        return db.execute("CALL createPersona4(?)", [this.url]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute("CALL getAllP4()");
    }

    static fetchOne(id) {
        return db.execute("CALL getOneP4(?)", [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
};
