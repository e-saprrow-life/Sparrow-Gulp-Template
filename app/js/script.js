'use strict'
// Lazy Load
// https://github.com/verlok/vanilla-lazyload
// https://github.com/verlok/vanilla-lazyload/#user-content-options
// lazyLoadInstance.update(); - обновить 
// const lazyLoad = new LazyLoad();


// https://github.com/cferdinandi/smooth-scroll/tree/master
// let smoothScroll = new SmoothScroll({
//     animationTime    : 800, // Время скролла 400 = 0.4 секунды
//     stepSize         : 100, // Размер шага в пикселях 
//     // Дополнительные настройки:
//     accelerationDelta : 20,  // Ускорение 
//     accelerationMax   : 2,   // Максимальное ускорение
//     keyboardSupport   : true, // Поддержка клавиатуры 
//     arrowScroll       : 50, // Шаг скролла стрелками на клавиатуре в пикселях
//     // Pulse (less tweakable)
//     // ratio of "tail" to "acceleration"
//     pulseAlgorithm   : true,
//     pulseScale       : 4,
//     pulseNormalize   : 1,
//     touchpadSupport   : true, // Поддержка тачпада
// });


// Инклудим файлы
@import('modules/_cookie.js')
@import('modules/_burger.js')


    // const defaultFontSize = 10;
    // const documentWidth = 1600;

    // function setRemSize() {
    //     if (window.innerWidth < documentWidth && window.innerWidth > 1260) {
    //         let value = (defaultFontSize / 100) * (window.innerWidth / (documentWidth / 100));
    //         document.documentElement.style.fontSize = (value.toFixed(1) > defaultFontSize) ? defaultFontSize + 'px' : value.toFixed(1) + 'px';
    //         console.log(value.toFixed(1))
    //     } else {
    //         document.documentElement.style.fontSize = defaultFontSize + 'px';
    //     }
    //     console.log(1)
    // }

    // window.addEventListener('resize', setRemSize);


// let ex1 = new Date(2012, 1, 20, 3, 12);
// console.log(ex1)

// // ex 2 
// let ex2 = new Date(); 

// function getWeekDay(date) {
//     let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
//     return days[date.getDay()]
// }

// console.log(getWeekDay(ex2))

// // ex 3 
// let date = new Date();
// console.log(date)
// function getDateAgo(date, days) {
//     let innerDate = new Date(date.getFullYear(), date)
//     if (!date) return "Нема об'єкту з датою";
//     if (!days) return "Введіть кількість днів, які треба відняти";

//     let month = ["Січня", "Лютого", "Березня", "Квітня", "Травня", "Чераня", "Липня", "Серпня", "Вересня", "Жовтня", "Листопада", "Грудня"];
//     date.setDate(date.getDate() - days);
//     return date.getDate() + " " + month[date.getMonth()];
// }
// console.log(getDateAgo(new Date, 73))

// async function test () {
//     let response = await fetch('test.html');
//     console.log(response.ok);
// }

// test();
// console.log(window.location)
// let inputs = document.querySelectorAll('input');
// for(let input of inputs) {
//     input.addEventListener('input', () => {
//         alert(input.value)
        
//     })
// }
console.log(1)