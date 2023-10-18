const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')

console.clear();

// console.log(argv);

//console.log("base: yargs", argv.b);

crearArchivo(argv.base, argv.l)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
