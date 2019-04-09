'use strict';


let listImg = document.getElementsByClassName('imgCarousel');
let count = 0;

function imgNext() {
    
    listImg[count].classList.add('displayNone');
    listImg[count +1].classList.remove('displayNone');

    ++ count;    
        
    }