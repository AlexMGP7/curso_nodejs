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
        this.listadoArr.forEach((tarea, i) => {
            console.log(`${`${i + 1}`.green}. ${tarea.desc} :: ${tarea.completadoEn ? "completado".green : "pendiente".red}`);
        });
    }

}

module.exports = Tareas;