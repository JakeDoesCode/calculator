
// taking in the inputs
let a= prompt("num1")
let b= prompt("num2")
let c= prompt("oper")
let reply_click = function(id)
 {
     console.log(id);
 }

let num1 = parseFloat(a);
let op = c;
let num2 = parseFloat(b);
const squareRoot = 'squareRoot'


//basic math functions
 function add(a,b) {
   let sum = a+b;
   console.log('Sum:' + sum)
   return sum;
 }
 
 function sub(a,b) {
  let diff = a-b;
  console.log('Difference:' + diff);
  return diff;
 
 }
 
 function mult(a,b){
   let product= a*b;
   console.log('Product:'+product);
   return product
 }
 
 function divide(a,b){
 
 if(a === 0 || b === 0){ alert("One does not simply divide by zero!");
 }else{
 let quot = a/b;
 console.log('Divide:'+ quot);
 return quot;
   };
 }
 
 function exp(a,b){
   let pow = a**b;
   console.log('Exponent:' + pow);
   return pow;
 }
 function sqr(a){
   if(a<=0) console.log("No.");
   let sqr = Math.sqrt(a);
   console.log(`Square root:` + sqr);
   return sqr;
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
    let answer=sqr(a,b);
    console.log(answer);
  }else {
    alert("Not a valid operator")
  }

 }


operate(num1,num2,op)
 

