const fs = require("fs");

const guardarDB = (data) => {
    try {
        const archivo = './db/data.json';
        fs.writeFileSync(archivo, JSON.stringify(data));
        console.log(`Los datos se han guardado correctamente en ${archivo}`);
    } catch (error) {
        console.error(`Error al guardar los datos: ${error.message}`);
    }
}

module.exports = {
    guardarDB,
}
