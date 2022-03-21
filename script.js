
function makeCalc(){
 let board= document.querySelector(".board");

 
 
 for(let i=0; i<=24; i++){
   let button =document.createElement(`BUTTON`)
   button.id = `btn${i}`;
   button.textContent=`${i}`
   board.appendChild(button);
 }


}
makeCalc();