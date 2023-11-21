const inquirer = require('inquirer');
require("colors");

const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "¿Que desea hacer?",
        choices: [
            {
                name: `${"1.".green} Buscar ciudad`,
                value: 1,
            },
            {
                name: `${"2.".green} Historial`,
                value: 2,
            },
            {
                name: `${"3.".green} Salir`,
                value: 0,
            },
        ],
    },
];

const listarLugares = async(lugares = []) => {

    const choices = lugares.map((lugar, i) => {

        return {
            name: `${`${i + 1}.`.green} ${lugar.nombre}`,
            value: lugar.id
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
            message: "Seleccione lugar:",
            choices,
        }
    ]

    const { id } = await inquirer.prompt(preguntas);

    return id;

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
    listarLugares,
    confirmar,
};
