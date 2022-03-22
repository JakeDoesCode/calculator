
// taking in the inputs
const displayOut=document.querySelector(".display-out");
const displayIn=document.querySelector(".display-in")
let reply_click = function(id)
 {
  displayIn.textContent=id;
 }


let num1=0;
let tempNum1Array =[];
let num2=0;
let tempNum2Array= [];
let savedValue=0
let operator='';
let tempOpArray=[]

const squareRoot = 'squareRoot'


//basic math functions
 function add(num1,num2) {
   let sum = num1+num2;
   let roundNum= Math.round((sum + Number.EPSILON) *100) / 100;
   roundNum=roundNum.toFixed(2);
   console.log("Add:", roundNum)
   
   displayOut.textContent=roundNum;
   
 }
 
 function sub(a,b) {
  let diff = a-b;
  let roundNum= Math.round((diff+Number.EPSILON) *100)/100;
  roundNum=roundNum.toFixed(2);
  console.log("Add:", roundNum)
  const displayOut=document.querySelector(".display-out");
  displayOut.textContent=roundNum;
 }
 
 function mult(a,b){
   let product= a*b;
   let roundNum= Math.round((product+Number.EPSILON) *100)/100;
   roundNum=roundNum.toFixed(2);
   console.log("Add:", roundNum)
   const displayOut=document.querySelector(".display-out");
   displayOut.textContent=roundNum;
 }
 
 function divide(a,b){
 
 if(a === 0 || b === 0){ alert("One does not simply divide by zero!");
 }else{
 let quot = a/b;
 let roundNum= Math.round((quot+Number.EPSILON) *100)/100;
 roundNum=roundNum.toFixed(2);
 console.log("Add:", roundNum);
 const displayOut=document.querySelector(".display-out");
 displayOut.textContent=roundNum;
   };
 }
 
 function exp(a,b){
   let pow = a**b;
   let roundNum= Math.round((pow+Number.EPSILON) *100)/100;
   roundNum=roundNum.toFixed(2);
   console.log("Add:", roundNum)
   const displayOut=document.querySelector(".display-out");
   displayOut.textContent=roundNum;
 }
 function sqr(a){
  const displayOut=document.querySelector(".display-out");
  if(a===0){
    displayOut.textContent="Not doing that.";
  }else{
   let sqr = Math.sqrt(a);
   let roundNum= Math.round((sqr+Number.EPSILON) *100)/100;
   roundNum=roundNum.toFixed(2);
   console.log("Add:", roundNum)
   displayOut.textContent=roundNum;
   return sqr;
  }
  }

 
 function operate(a,b,op){
  if(op==='*') {
    let answer= mult(a,b); 
    console.log(answer);
  }else if(op === '+'){
    let answer= add(a,b); 
    console.log(answer);
  }else if (op === '-'){
    let answer = sub(a,b); 
    console.log(answer);
  }else if(op==='/'){
    let answer = divide(a,b);
    console.log(answer);
  }
  else if(op==='**'){
    let answer= exp(a,b);
    console.log(answer);
  }
  else if (op===squareRoot){
    let answer=sqr(a);
    console.log(answer);
  }else {
    alert("Not a valid operator")
  }

 }

const clearButton = document.querySelector('#btnClear')
clearButton.addEventListener('click',() => {location.reload();})


