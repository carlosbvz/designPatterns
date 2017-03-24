
// Module 1
'use strict';
var APP = window.APP = window.APP || {};
APP.module1 = (function(){

    const $moduleOne    = $('.module1'),
          $addToCartBtn = $moduleOne.find('.addToCartBtn');

    let addedBooksCount = 0;

    const bindEventsToUI = () => {
        $addToCartBtn.on('click', () => {
            addedBooksCount++;
            APP.module2.updateLabel(addedBooksCount);
            APP.module3.showMessage();
        })
    }

    const init = () => {
        bindEventsToUI();
    }

    return {
        init
    };

}());

// Module 2
'use strict';
var APP = window.APP = window.APP || {};
APP.module2 = (function(){

    const $moduleTwo = $('.module2'),
          $label     = $moduleTwo.find('.countLabel');

    const updateLabel = (number) => {
        $label.text(number);
    }


    const init = () => {
        
    }

    return {
        init,
        updateLabel
    };

}());

// Module 3
'use strict';
var APP = window.APP = window.APP || {};
APP.module3 = (function(){

    let count = 0;
    const $moduleThree = $('.module3');

    const showMessage = () => {
        let id = count;
        $moduleThree.append(`<div class="msg" id=${id}><p> Thanks for shopping with us! </p></div>`);
        setTimeout(() => {
            $(`#${id}`).remove();
        },2000)
        count++;
    }
    

    const init = () => {

    }

    return {
        init,
        showMessage
    };

}());


// Init all modules
APP.module1.init();
APP.module2.init();
APP.module3.init();
