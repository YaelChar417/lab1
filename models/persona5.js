const fs = require('fs');
const path = require('path');

module.exports = class Place {
    static filePath = path.join(__dirname, '..', 'datos.txt');

    static getLugares() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8'); // Usar método síncrono
            return data.split('\n').filter(linea => linea.trim() !== '');
        } catch (error) {
            console.error('Error al leer el archivo:', error);
            return []; // Si hay un error, devolvemos una lista vacía
        }
    }

    static agregarLugar(address) {
        try {
            fs.appendFileSync(this.filePath, address + '\n'); // Usar método síncrono
            return true; // Indica que se guardó correctamente
        } catch (error) {
            console.error('Error en modelo:', error);
            return false; // Indica que ocurrió un error
        }
    }
};
