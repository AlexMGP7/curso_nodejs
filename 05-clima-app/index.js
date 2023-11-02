const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")


const main = async () => {

    let opt;

    do {

        // Imprimir el menu de opciones
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const desc = await leerInput("Buscar ciudad");
                console.log(desc);
                break;

            case 2:
                //tareas.listadoCompleto();
                break;

            case 3:
                //tareas.listarPendientesCompletadas();
                break;

            default:
                break;
        }

        if (opt !== 0) {
            await pausa();
        }

    } while (opt !== 0);

}

main();