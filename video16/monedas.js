console.log("todo correto");

document.querySelector('#dolar').addEventListener('click', function () {
    obtenerDatos('dolar');
});
document.querySelector('#uf').addEventListener('click', function () {
    obtenerDatos('uf');
});
document.querySelector('#bitcoin').addEventListener('click', function () {
    obtenerDatos('bitcoin');
});

function obtenerDatos(valor) {
    //console.log('Has dado un click');
    let url = `https://mindicador.cl/api/${valor}`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos.serie);
            let resuntado = document.querySelector('#resultado');
            resultado.innerHTML = '';

            let i = 0;

            for (let item of datos.serie) {
                i++;
                resultado.innerHTML += `<li>${item.fecha.substring(1, 10)}  | $ ${item.valor}</li>`

                if (i > 10) {
                    break;
                }

            }
        }

    }
}