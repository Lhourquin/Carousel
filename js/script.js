'use strict';


let listImg = document.getElementsByClassName('imgCarousel');
let count = 0;
let length = listImg.length -1;

function imgNext() {
    console.log(count);
   /* listImg[count].classList.add('displayNone');
    listImg[count +1].classList.remove('displayNone');
    
    ++count;*/

    if(count >= length ){
  /*  listImg[length].classList.remove('displayNone');
    count = 0;
    listImg[count].classList.add('displayNone');*/
    }else{
        listImg[count].classList.add('displayNone');
    listImg[count +1].classList.remove('displayNone');
    
    ++count;
    }
    console.log(count);
}