console.log(`todo esta correcto`);

const btnBotones = document.querySelector('#btnBotones');
const botones = document.querySelector('#botones');
const fondo = document.querySelector('#fondo');
(() => {
    btnBotones.addEventListener('click', agregarBotones);
    botones.addEventListener('click', delegacion);

})();

function delegacion(e) {
    e.preventDefault();
    //console.log(e.target.classList[1]);
    const colorBoton = e.target.classList[1];

    switch (colorBoton) {
        case ('btn-primary'):
            //console.log('Has dado click en primary');
            fondo.className = 'bg-primary';
            break;
        case ('btn-secondary'):
            //console.log('Has dado click en primary');
            fondo.className = 'bg-secondary';
            break;
        case ('btn-success'):
            //console.log('Has dado click en primary');
            fondo.className = 'bg-success';
            break;
        case ('btn-danger'):
            //console.log('Has dado click en primary');
            fondo.className = 'bg-danger';
            break;
        case ('btn-warning'):
            //console.log('Has dado click en primary');
            fondo.className = 'bg-warning';
            break;
        case ('btn-dark'):
            //console.log('Has dado click en primary');
            fondo.className = 'bg-dark';
            break;
    }
}

function agregarBotones(e) {
    e.preventDefault();
    botones.innerHTML = `
    <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-dark">nocturno</button>
    `;

}