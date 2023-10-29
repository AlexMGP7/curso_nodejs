const inquirer = require("inquirer");
require("colors");

const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "¿Que desea hacer?",
        choices: [
            {
                name: `${"1.".green} Crear tarea`,
                value: "1",
            },
            {
                name: `${"2.".green} Listar tareas`,
                value: "2",
            },
            {
                name: `${"3.".green} Listar tareas completadas`,
                value: "3",
            },
            {
                name: `${"4.".green} Listar tareas pendientes`,
                value: "4",
            },
            {
                name: `${"5.".green} Completar tarea`,
                value: "5",
            },
            {
                name: `${"6.".green} Eliminar una tarea`,
                value: "6",
            },
            {
                name: `${"7.".green} Salir`,
                value: "0",
            },
        ],
    },
];

const listadoTareas = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        return {
            name: `${`${i + 1}.`.green} ${tarea.desc}`,
            value: tarea.id
        }
    });

    choices.unshift({
        name: `${"0.".green} Cancelar`,
        value: "0",
    })

    const preguntas = [
        {
            type: "list",
            name: "id",
            message: "Seleccionar",
            choices,
        }
    ]

    const { id } = await inquirer.prompt(preguntas);

    return id;

}
const listadoTareasCheck = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        return {
            name: `${`${i + 1}.`.green} ${tarea.desc}`,
            value: tarea.id,
            checked: tarea.completadoEn ? true : false,
        }
    });

    const pregunta = [
        {
            type: "checkbox",
            name: "ids",
            message: "Selecciones",
            choices,
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);

    return ids;

}

const confirmar = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'confirm',
            message
        }
    ];

    const { confirm } = await inquirer.prompt(question);
    return confirm;
}


const inquirerMenu = async() => {

    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.white );
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

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

const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareas,
    confirmar,
    listadoTareasCheck,
};
