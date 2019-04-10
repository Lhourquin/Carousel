'use strict';


let listImg = document.getElementsByClassName('imgCarousel');
let count = 0;
let length = listImg.length -1;
//let minLength = length - 1;


function imgNext() {
    console.log(count);
    if(count >= length ){
      listImg[length].classList.add('displayNone');
      count = 0;
      listImg[count].classList.remove('displayNone');
    }else {
      listImg[count].classList.add('displayNone');
      listImg[count +1].classList.remove('displayNone');
    
      ++count;
    }
    console.log(count);
}

function imgPrevious (){
  console.log(count);
  if(count <= 0){

    listImg[count + length].classList.remove('displayNone');
    listImg[count + length-1].classList.add('displayNone') 
    
  }
console.log(count);
 /* }else{
  listImg[count].classList.add('displayNone');
  listImg[count-1].classList.remove('displayNone');
  -- count;
console.log(count);
  }*/
  }