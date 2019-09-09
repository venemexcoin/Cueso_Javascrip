//IIFE(Immediately Invoked Function Expression)

// (function suscribete() {
//     console.log(`Suscríbete a mi canal!`);
// })();

((nombre = 'Ignacio') => {
    console.log(`Suscríbete a mi canal! ${nombre}`);
})('Juanito');

// function suscribete() {
//     console.log(`Suscríbete a mi canal!`);
// }
// suscribete();