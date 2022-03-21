

function makeCalc(){
 let board= document.querySelector(".board");

 
 
 for(let i=0; i<=19; i++){
   let button =document.createElement(`BUTTON`)
   button.id = `btn${i}`;
  //  button.textContent=`${i}`
   board.appendChild(button);
 }


}
makeCalc();




function add(a,b) {
  let sum = a+b;
  return sum;
}

function sub(a,b) {
 let diff = a-b;
 return diff;

}

function mult(a,b){
  let product= a*b;
  return product
}

function divide(a,b){

if(a === 0 || b === 0) console.log("Can't do that!");
  else{
let quot = a/b;
return quot;
  };
}

function exp(a,b){
  let pow = a**b;
  return pow;
}
function sqr(a){
  if(a===0) console.log("No.");
  let sqr = Math.sqrt(a);
  return sqr;
}

// make function for clear and clear all
//make operate function (takes 2 numbers and calls one of the above functions)
//put display in proper area