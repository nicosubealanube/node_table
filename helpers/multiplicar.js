
const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5, listar = false, hasta = 10) => {
try {



let salida = '';

for ( let i = 1; i <= hasta; i++ ) {
   salida += `${ base } x ${ i } = ${ base * i } \n`;
};

if( listar ){
    console.log('--------'.america);
    console.log(`la tabla del ${ base }`);
    console.log('--------'.america);
    console.log(salida);
}


fs.writeFileSync( `./outputs/tabla-${ base }.txt`, salida);

return `tabla-${ base }.txt`;
} 

catch (err) {
    throw err
}
}

module.exports = {
    crearArchivo
}