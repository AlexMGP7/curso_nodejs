require("colors");

const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");

const Tareas = require("./models/tareas");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");

const main = async () => {
    let opt = "";
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.listadoArr = tareasDB;
    }

    await pausa();

    do {

        // Imprimir el menu de opciones
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                const desc = await leerInput("Ingrese la descripción de la tarea:");
                tareas.crearTarea(desc);
                break;

            case "2":
                console.log(tareas.listadoArr);
                break;

            default:
                break;
        }

        // guardarDB(tareas.listadoArr);

        if (opt !== "0") {
            await pausa();
        }
    } while (opt !== "0");

    pausa();
};

main();

