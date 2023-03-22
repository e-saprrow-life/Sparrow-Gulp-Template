/**
 * Пример подключения модуля
 * @@if ( 0 ) { @@include_once('_test.js') }
 */


// https://github.com/verlok/vanilla-lazyload
// https://github.com/verlok/vanilla-lazyload/#user-content-options
// lazyLoadInstance.update(); - обновить 
const lazyLoad = new LazyLoad();




// Tests 
function isWantedGuest(element, index, array) {
    const guestName = 'Лиза';
    return element === guestName
} 

const partyGuests = [
    'Даня',
    'Саша',
    'Юля',
    'Лиза',
    'Лиза',
    'Лиза',
    'Егор',
];

/* array.find() - аргумент метода - функция с тремя параметрами: element, index,  array*/
let result = partyGuests.find((element, index, array) => {
    if ( index === 3 ) return element;
})

// document.body.innerHTML = 'script run';

// navigator.geolocation.getCurrentPosition((position)=> {
//     console.log(position)
//     document.body.innerHTML = `
//         <p>position.timestamp: ${position.timestamp}</p>
//     `;
// })
