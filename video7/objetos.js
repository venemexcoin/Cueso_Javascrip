// var arreglo = ['HTML', 15, true];

// console.log(arreglo);

// var objeto = {
//     nombre: 'HTML',
//     duracion: 15,
//     estado: true,
//     capitulos: {
//         nombre: 'Introducción',
//         videos: 20
//     }
// }

// console.log(objeto.capitulos.nombre);

var arrayObjetos = [{
        nombre: 'HTML',
        estado: true
    },
    {
        nombre: 'CSS',
        estado: true
    },
    {
        nombre: 'JavaScrip',
        estado: false
    },
]
for (let indice of arrayObjetos) {
    console.log(indice.nombre);
}