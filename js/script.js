'use strict';


let listImg = document.getElementsByClassName('imgCarousel');
let count = 0;
let length = listImg.length;

function imgNext() {
    
    listImg[count].classList.add('displayNone');
    listImg[count +1].classList.remove('displayNone');
    
    ++ count;

    if(count >= length-1){
    
    listImg[count].classList.add('displayNone');
    count = 0;
    listImg[count=0].classList.remove('displayNone');
    }
    console.log(count);
}