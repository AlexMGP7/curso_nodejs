const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .check((argv, options) => {
    if (typeof argv.l !== "boolean") {
      throw "El listar tiene que ser un booleano";
    }
    return true;
  }).argv;

  
module.exports = argv