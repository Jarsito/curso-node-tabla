const argv= require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption: true,
                describe: 'Es la base de multiplicar'
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                default: false,
                describe: 'Muestra la tabla de multiplicar'
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                default: 10,
                describe: 'Este es el numero hasta donde quieres la tabla'
            })
            .check((argv, options) =>{
                if( isNaN (argv.b)){
                    throw 'La base tiene que ser un nùmero'
                }
                return true;
            })
            .argv;

module.exports= argv;