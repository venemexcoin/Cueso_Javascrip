console.log("todo corecto y en linea");

//variables globales
const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.querySelector('#listaActividades');
let arrayActividades = [];


//Funciones
const CrearItem = (actividad) => {
    let item = {
        actividad: actividad,
        estado: false
    }
    arrayActividades.push(item);

    return item;
}

const GuardarDB = () => {

    localStorage.setItem('rutina', JSON.stringify(arrayActividades));
    PintarDB();
}

const PintarDB = () => {
    listaActividadesUI.innerHTML = '';

    arrayActividades = JSON.parse(localStorage.getItem('rutina'));
    if (arrayActividades == null) {
        arrayActividades = [];
    } else {
        arrayActividades.forEach(element => {
            listaActividadesUI.innerHTML += `
            <div class="alert alert-danger" role="alert"><i class="material-icons float-left mr-2">accessibility_new</i><b>${element.actividad}</b> - ${element.estado}<span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`;
        });
    }
}

const EliminarDB = (actividad) => {
    let indexArray;
    arrayActividades.forEach((elemento, index) => {

        if (elemento.actividad === actividad) {
            indexArray = index;
        }


    });

    arrayActividades.splice(indexArray, 1);
    GuardarDB();
}

const EditarDB = (actividad) => {
    let indexArray = arrayActividades.findIndex((elemento) =>
        elemento.actividad === actividad

    );
    console.log(arrayActividades[indexArray]);

    arrayActividades[indexArray].estado = true;
    GuardarDB();
}

//Eventos
formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;

    CrearItem(actividadUI);

    GuardarDB();

    formularioUI.reset();
});

document.addEventListener('DOMContentLoaded', PintarDB);

listaActividadesUI.addEventListener('click', (e) => {
    e.preventDefault();


    if (e.target.innerHTML === 'done' || e.target.innerHTML === 'delete') {
        let texto = e.path[2].childNodes[1].innerHTML;
        if (e.target.innerHTML === 'delete') {
            // Accion eliminar
            EliminarDB(texto);

        }

        if (e.target.innerHTML === 'done') {
            EditarDB(texto);
        }
    }
});