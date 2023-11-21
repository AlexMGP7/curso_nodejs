require('dotenv').config()
const { leerDB } = require('../04-tareas-hacer/helpers/guardarArchivo');
const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async () => {

    let opt;

    const busquedas = new Busquedas();

    do {

        // Imprimir el menu de opciones
        opt = await inquirerMenu();


        switch (opt) {
            case 1:
                // Mostrar mensaje
                const termino = await leerInput("Buscar ciudad: ");
                // Buscar los lugares
                const lugares = await busquedas.ciudad(termino);
                // Seleccionar el lugar
                const id = await listarLugares(lugares);

                if (id === '0') continue;

                
                const lugarSel = lugares.find(lugar => lugar.id === id);
                
                //Guardar DB
                busquedas.agregarHistorial(lugarSel.nombre);

                //Clima

                const climaLugar = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng)

                //Mostrar resultados
                console.clear();

                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', lugarSel.nombre.green );
                console.log('Lat:', lugarSel.lat);
                console.log('Long:', lugarSel.lng);
                console.log('Temperatura:', climaLugar.temp);
                console.log('Min:', climaLugar.min);
                console.log('Max:', climaLugar.max);
                console.log('Descripcion: ', climaLugar.desc.green);

                break;

            case 2:
                //console.log(busquedas.historial);
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${i+1}.`.green;
                    console.log(`${idx} ${lugar}`);
                })
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