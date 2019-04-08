'use strict';

let ul = document.getElementsByTagName("ul")[0];
let previous = document.getElementsByClassName('previous');
let next = document.getElementsByClassName('next');


ul.addEventListener("click", function (event){
    console.log("str");
    let target = event.target;
    console.log(target);
    if(target != 'next'){
        return;
    }else{
        ul.children.toggle('display');
    }
});