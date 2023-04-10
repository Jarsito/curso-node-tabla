
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');
            
console.clear();



 crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log( nombreArchivo.brightMagenta, 'creado'))
    .catch( err => console.log(err)); 







//const [, , arg3 = 'base=5 ']= process.argv;
//const[ , base=5 ] = arg3.split('=');

//console.log(base); 

//const base = 5;




// fs.writeFile( `tabla- ${ base } .txt` , salida, (err)=>{
//    if(err) throw err;
//    console.log(`tabla- ${ base } .txt creado`);
// })

