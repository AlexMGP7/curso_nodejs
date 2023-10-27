const fs = require("fs");

const archivo = "./db/data.json";
const guardarDB = (data) => {
    try {
        fs.writeFileSync(archivo, JSON.stringify(data));
        console.log(`Los datos se han guardado correctamente en ${archivo}`);
    } catch (error) {
        console.error(`Error al guardar los datos: ${error.message}`);
    }
};

const leerDB = () => {
    if (!fs.existsSync(archivo)) {
        return null;
    }
    const data = JSON.parse(fs.readFileSync(archivo, "utf8"));
    console.log(data);
    return null;
};

module.exports = {
    guardarDB,
    leerDB,
};
