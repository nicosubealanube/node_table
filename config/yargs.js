const yargs = require('yargs');

const argv = require('yargs')
                            .option('b', {
                                alias: 'base',
                                type: 'number',
                                demandOption: 'true',
                                describe: 'is the base number of the table'
                            })
                            .option('l', {
                                alias: 'listar',
                                type: 'boolean',
                                demandOption: true,
                                default: false,
                                describe: 'list the table'
                            })
                            .option('h', {
                                alias: 'hasta',
                                type: 'number',
                                default: 10,
                                describe: 'the limit of the table',
                            })
                            .check( (argv, options)=> {
                                if( isNaN(argv.b) ){
                                    throw 'the base is not a number'
                                }
                                return true;
                            })
                            .argv;

module.exports = argv;