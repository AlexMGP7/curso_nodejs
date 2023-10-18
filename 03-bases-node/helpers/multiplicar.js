const fs = require("fs");
const colors = require("colors");

const crearArchivo = (base = 5, listar = false) => {
  return new Promise((resolve, reject) => {
    // Se puede hacer tambien con async
    let salida = "";

    if (listar) {
      console.log(`======================`.green);
      console.log("Tabla del: ".rainbow, base);
      console.log(`======================`.green);
    }

    for (let step = 1; step <= 10; step++) {
      if (listar) {
        console.log(`${base} ${colors.rainbow("x")} ${step} ${colors.yellow("=")} ${colors.bold(base * step)}`);
      }
      salida += `${base} ${colors.rainbow("x")} ${step} ${colors.yellow("=")} ${base * step}\n`;
    }

    if (salida) {
      fs.writeFileSync(`tabla-${base}.txt`, salida);
      resolve(`${colors.rainbow(`Tabla-${base}.txt`)} creado`);
    } else {
      reject(`Hubo un error con la salida`);
    }
  });
};

module.exports = {
  crearArchivo,
};
