require("colors");

const { listadoTareasCheck, confirmar, inquirerMenu, listadoTareas, pausa, leerInput } = require("./helpers/inquirer");

const Tareas = require("./models/tareas");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");

const main = async () => {

    let opt = "";

    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {

        // Imprimir el menu de opcionesd
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                const desc = await leerInput("Ingrese la descripción de la tarea:");
                tareas.crearTarea(desc);
                break;

            case "2":
                tareas.listadoCompleto();
                break;

            case "3":
                tareas.listarPendientesCompletadas();
                break;

            case "4":
                tareas.listarPendientesCompletadas(false);
                break;

            case "5":
                const ids = await listadoTareasCheck(tareas.listadoArr);
                // Completar una tarea

                tareas.toggleCompletadas(ids);


                break;

            case "6":
                // Eliminar una tarea
                const id = await listadoTareas(tareas.listadoArr);

                if (id === "0" || !await confirmar("¿Desea eliminar esta tarea?")) {
                    break;
                }
                tareas.borrarTarea(id);
                console.log("Tarea eliminada".green);

                break;

            default:
                break;
        }

        guardarDB(tareas.listadoArr);

        if (opt !== "0") {
            await pausa();
        }
    } while (opt !== "0");

};

main();

