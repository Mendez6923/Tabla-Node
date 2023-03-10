const fs = require('fs'); //paquete para agregar archivo
const { resolve } = require('path');
const colors = require('colors');

const crearArchivo = async(base = 5,listar=false, hasta = 10)=>{

    try {


let salida = '';

for (let i = 1; i <= hasta; i++) {
    salida += `${base} x  ${i}=  ${ base  *  i } \n`;
    
}

if(listar){
console.log('============================'.green);
console.log('       TABLA DEL ',colors.bgBlue(base));
console.log('============================'.green);
console.log(salida);
}




fs.writeFileSync(`./salida/tabla - ${base}.txt`, salida); //crea el archivo

return `tabla-${base} creado`;

        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}