'use strict';

const box= document.querySelector('.container');
 
for(let i= 1; i<= 100; i++){
    
  const div= document.createElement('div');
  box.append(div);
  div.classList.add(`item`);
    
  if (i % 3=== 0 && i % 5 === 0){
        console.log('fizzbuzz');
        div.innerHTML= '<strong>fizzbuzz</strong>';
      }else if (i % 3 === 0){
        console.log('fizz');
        div.innerHTML= '<strong>fizz</strong>';
         }else if (i % 5 === 0){
            console.log('buzz');
            div.innerHTML= '<strong>buzz</strong>'; 
            }else {
               console.log(i);
               div.innerHTML= (i);
               }
}