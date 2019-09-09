console.log('Todo conectado');

const productos = [{
        nombre: 'Liberacion AT&T',
        Valor: 50
    },
    {
        nombre: 'Liberacion Movistar',
        valor: 50
    },
    {
        nombre: 'Limpieza Solo AT&T',
        Valor: 100
    },
    {
        nombre: 'Liberacion Iphone 3 al 6',
        Valor: 200
    },
    {
        nombre: 'Liberacion Iphone 7 al X ',
        Valor: 400
    },
    {
        nombre: 'Liberacion Iphone SR al max',
        Valor: 450
    },
    {
        nombre: 'Liberacion Iphone EEUU',
        Valor: 250
    },
    {
        nombre: 'Liberacion AT&T EEUU',
        Valor: 50
    },
]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
    // console.log(formulario.value);
    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();

    for (let producto of productos) {
        let nombre = producto.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) {
            resultado.innerHTML += `
            <li>${producto.nombre} - valor: ${producto.valor}</li>`
        }
    }
    if (resultado.innerHTML === '') {
        resultado.innerHTML +=
            `<li><b>Producto no encontrado...</b></li>`
    }
}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

filtrar();