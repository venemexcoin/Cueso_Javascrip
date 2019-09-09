console.log('Activo');

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos() {
    // console.log('todo correcto');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'catalogo.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);

            let datos = JSON.parse(this.responseText);
            // console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (let item of datos) {
                // console.log(item.titulo);
                res.innerHTML += `
                <tr>
                <td>${item.titulo}</td>
                <td>${item.artista}</td>
              </tr>
                `

            }
        }
    }
}