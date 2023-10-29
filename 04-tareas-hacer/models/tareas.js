const { v4: uudiv4 } = require('uuid');
const Tarea = require("./tarea");

class Tareas {

    _listado = {
        //'abc': 123
    };


    get listadoArr() {

        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto() {
        console.log();
        this.listadoArr.forEach((tarea, i) => {
            console.log(`${`${i + 1}`.green}. ${tarea.desc} :: ${(tarea.completadoEn) ? "completado".green : "pendiente".red}`);
        });
    }

    listarPendientesCompletadas(completadas = true) {
        console.log();

        this.listadoArr.forEach((tarea, i) => {
            if (completadas === false && tarea.completadoEn === null) {
            console.log(`${`${i + 1}`.green}. ${tarea.desc} :: ${"pendiente".red}`);
            } else if (completadas === true && tarea.completadoEn!== null) {
            console.log(`${`${i + 1}`.green}. ${tarea.desc} :: ${`${tarea.completadoEn}`.green}`);
            }
        });

    }

    toggleCompletadas(ids = []) {

        this.listadoArr.forEach( tarea => {
            if (ids.includes(tarea.id)) {
                tarea.completadoEn = new Date();
            }
            else {
                tarea.completadoEn = null;
            }
        })

    }



}

module.exports = Tareas;