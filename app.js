
const { option, boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear()

crearArchivo( argv.b, argv.l, argv.h)
.then (nombreArchivo => console.log(nombreArchivo.america, 'creado'))
.catch(err => console.log(err));


/*forma anterior de hacerlo*/
//const [ , , arg3 = 'base = 5'] = process.argv;
//const [ , base = 5 ] = arg3.split('=');


//const base = 2;