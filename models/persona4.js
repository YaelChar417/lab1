const personaPhotos = [];

module.exports = class Album {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_url) {
        this.url = mi_url;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        personaPhotos.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return personaPhotos;
    }
}