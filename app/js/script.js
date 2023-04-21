'use strict'
// https://github.com/verlok/vanilla-lazyload
// https://github.com/verlok/vanilla-lazyload/#user-content-options
// lazyLoadInstance.update(); - обновить 
const lazyLoad = new LazyLoad();


// Инклудим файлы
@include_once('modules/_burger.js')




{
    const defaultFontSize = 10;
    const documentWidth = 1600;

    function setRemSize() {
        if (window.innerWidth < documentWidth && window.innerWidth > 1260) {
            let value = (defaultFontSize / 100) * (window.innerWidth / (documentWidth / 100));
            document.documentElement.style.fontSize = (value.toFixed(1) > defaultFontSize) ? defaultFontSize + 'px' : value.toFixed(1) + 'px';
            console.log(value.toFixed(1))
        } else {
            document.documentElement.style.fontSize = defaultFontSize + 'px';
        }
        console.log(1)
    }

    window.addEventListener('resize', setRemSize);
}
