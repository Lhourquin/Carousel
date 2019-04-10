'use strict';


let listImg = document.getElementsByClassName('imgCarousel');
let count = 0;
let length = listImg.length -1;



function imgNext() {
    if(count >= length ){
      listImg[length].classList.add('displayNone');
      count = 0;
      listImg[count].classList.remove('displayNone');
    }else {
      listImg[count].classList.add('displayNone');
      listImg[count +1].classList.remove('displayNone');
    
      ++count;
    }
}

function imgPrevious (){
  if(count <= 0){
    listImg[count].classList.add('displayNone');
    count = count+length;
    listImg[count].classList.remove('displayNone');
    listImg[count-1].classList.add('displayNone') 
    
  }else{
  listImg[count].classList.add('displayNone');
  listImg[count-1].classList.remove('displayNone');
  -- count;
  }
  }