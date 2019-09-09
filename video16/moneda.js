console.log('prueba eth');

let ETH = url = ('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=ETH');
let BTC = url = ('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC');
let EUR = url = ('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=EUR');
let MXN = url = ('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=MXN');



document.querySelector('#eth').addEventListener('click', function () {
    //console.log('Has echo clic')
    obtenerDatos();
});

e.preventDefault();

function obtenerDatos(e) {

    //console.log('distes click');
    let url = ETH;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            console.log(datos.ETH);
            let resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';


            resultado.innerHTML += `<br><li><h3>Un dolar</h3></li><li><h1>Ethereum ${datos.ETH}</h1</li>`;

        }
    }

    document.querySelector('#btc').addEventListener('click', function () {
        //console.log('Has echo clic')
        obtenerDatos();
    });


    function obtenerDatos() {
        //console.log('distes click');
        let url = BTC;

        const api = new XMLHttpRequest();
        api.open('GET', url, true);
        api.send();

        api.onreadystatechange = function () {
            if (this.status == 200 && this.readyState == 4) {
                let datos = JSON.parse(this.responseText);
                console.log(datos.BTC);
                let resultado = document.querySelector('#resultado');
                resultado.innerHTML = '';


                resultado.innerHTML += `<br><li><h3>Un dolar</h3></li><li><h1>BITCOIN ${datos.BTC}</h1></li>`;

            }
        }
        document.querySelector('#eur').addEventListener('click', function () {
            //console.log('Has echo clic')
            obtenerDatos();
        });


        function obtenerDatos() {
            //console.log('distes click');
            let url = EUR;

            const api = new XMLHttpRequest();
            api.open('GET', url, true);
            api.send();

            api.onreadystatechange = function () {
                if (this.status == 200 && this.readyState == 4) {
                    let datos = JSON.parse(this.responseText);
                    console.log(datos.EUR);
                    let resultado = document.querySelector('#resultado');
                    resultado.innerHTML = '';


                    resultado.innerHTML += `<br><li><h3>Un dolar</h3></li><li><h1> EURO ${datos.EUR}</h1></li>`;

                }
            }
            document.querySelector('#mxn').addEventListener('click', function () {
                //console.log('Has echo clic')
                obtenerDatos();
            });


            function obtenerDatos() {
                //console.log('distes click');
                let url = MXN;

                const api = new XMLHttpRequest();
                api.open('GET', url, true);
                api.send();

                api.onreadystatechange = function () {
                    if (this.status == 200 && this.readyState == 4) {
                        let datos = JSON.parse(this.responseText);
                        console.log(datos.MXN);
                        let resultado = document.querySelector('#resultado');
                        resultado.innerHTML = '';


                        resultado.innerHTML += `<br><li><h3>Un dolar</h3></li><li><h1>Peso Mexicano ${datos.MXN}</h1></li>`;

                    }
                }

            }
        }
    }

}