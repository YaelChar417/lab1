const db = require("../util/database");

module.exports = class Place {
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }

    save() {
        return db.execute("CALL createPersona5(?)", [this.nombre]);
    }

    static fetchAll() {
        return db.execute("CALL getAllP5");
    }

    static fetchOne(id) {
        return db.execute("CALL getOneP5(?)", [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

    static updateOne(id, newName) {
        return db.execute("CALL updateOneP5(?, ?)", [newName, id]);
    }
};
