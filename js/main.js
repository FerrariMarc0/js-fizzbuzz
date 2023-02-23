'use strict';
const box = document.querySelector('.container');

for(let i = 1; i <= 100; i++){
    
    if (i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz');
     }else if (i % 3 === 0){
        console.log('fizz');
     }else if (i % 5 === 0){
        console.log('buzz');
     }else {
        console.log(i)
     }
     const div = document.createElement('div');
     div.classList.add(`class-${i}`);
     div.append(i)
     box.append(div);
     

}