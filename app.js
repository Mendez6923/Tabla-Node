
const { log } = require('console');
const colors = require('colors');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();




console.log(argv);

console.log('base: yargs',argv.base,argv.listar,argv.hasta);

// const [,,argv2='base=5']= process.argv;
// const [,base]= argv2.split('=');
// console.log(base);
//const base=9;

  crearArchivo(argv.base,argv.listar,argv.h)
                .then( nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
                .catch(err=> console.log(err));


// fs.writeFile(`tabla ${base}.txt`,salida,(err)=>{
//   if(err) throw err;
//   console.log('tabla-5.text creado');
// });