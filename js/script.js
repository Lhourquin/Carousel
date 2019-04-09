'use strict';

let ul = document.getElementsByTagName("ul")[0];
let previous = document.getElementsByClassName('previous');
let next = document.getElementsByClassName('next');
let img = document.getElementsByTagName('img');

ul.onclick = function (event){
    let target = event.target;
    console.log(target);
    target.classList.add('display');

    
};       