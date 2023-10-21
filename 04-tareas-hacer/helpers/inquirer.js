const inquirer = require("inquirer");
require("colors");

const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "¿Que desea hacer?",
        choices: [
            {
                name: "1. Crear tarea",
                value: "1",
            },
            {
                name: "2. Listar tareas",
                value: "2",
            },
            {
                name: "3. Listar tareas completadas",
                value: "3",
            },
            {
                name: "4. Listar tareas pendientes",
                value: "4",
            },
            {
                name: "5. Completar tarea",
                value: "5",
            },
            {
                name: "6. Eliminar una tarea",
                value: "6",
            },
            {
                name: "0. Salir",
                value: "0",
            },
        ],
    },
];

const inquirerMenu = async () => {
    console.clear();
    console.log("=====================".green);
    console.log(" Seleccione una opción:".green);
    console.log("=====================\n".green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
};

const pausa = async () => {

    const pause = [
        {
            type: "input",
            name: "opcion",
            message: `Presione ${'ENTER'.green} para continuar`,
        }
    ];
    console.log('\n');

    await inquirer.prompt(pause);
    return;
};

const leerInput = async (mensaje) => {

    const question = [
        {
            type: "input",
            name: "desc",
            mensaje,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
};
