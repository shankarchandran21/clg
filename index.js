const factorial = document.getElementById('factorial');
const oddOrEven = document.getElementById('oddOrEven');
const program = document.getElementById('program');
const output = document.getElementById('output');
const armstrong = document.getElementById('armstrong');
const areaSquare = document.getElementById('areaSquare');
const areaRectangle = document.getElementById('areaRectangle');



factorial.addEventListener('click',()=>{
    // program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));
let fact = 1;
// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
  
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
       program.innerHTML = `
       const number = parseInt(prompt('Enter a positive integer: '));
       <br />
       if (number < 0) {
        <br/>
            console.log('Error! Factorial for negative number does not exist.');
         }
        <br/>
        if (number < 0) {
            <br/>
                 console.log('Error! Factorial for negative number does not exist.');
             }
        <br/>
        if (number < 0) {
            <br/>
                 console.log('Error! Factorial for negative number does not exist.');
             }
        <br/>
        if (number < 0) {
            <br/>
                 console.log('Error! Factorial for negative number does not exist.');
             }
            <br/>
            else if (number === 0) {
            <br/>
                
                   console.log(' Display In Output Menu');
                 }
                <br/>
                else {
                         let fact = 1;
                         for (i = 1; i <= number; i++) {
                             fact *= i;
                         }
                         console.log('Display In Output Menu');
       }`

      output.textContent= fact
})

oddOrEven.addEventListener('click', ()=>{
    const number = prompt("Enter a number: ");

    let outputString = ''
if(number % 2 == 0) {
    outputString ="The number is even."
}

// if the number is odd
else {
    outputString = "The number is odd."
}

    program.innerHTML=`
    const number = prompt("Enter a number: ");

    //check if the number is even
    if(number % 2 == 0) {
        console.log("The number is even.");
    }
    
    // if the number is odd
    else {
        console.log("The number is odd.");
    }
    
    `
    output.innerHTML= outputString

})


armstrong.addEventListener('click',()=>{

    let number;
number = prompt("Enter a number !"); 

let n = number.length; 

let sum = 0; 

let i=0;

let outputString = ""

while(i<n)
{
    let digit = number[i]-'0'; 
    sum = (sum + Math.pow(digit,n)); 
    i++; 
}

if(sum == number) 
{
    console.log(number, "is an Armstrong Number");
    outputString =  number + " is an Armstrong Number"
}
else{
    console.log(number, "is not an Armstrong Number");
    outputString =  number + "is not an Armstrong Number"

}

program.innerHTML =` 
let number;
number = prompt("Enter a number !"); 

let n = number.length; 

let sum = 0; 

let i=0;

let outputString = ""

while(i <= n)
{
    let digit = number[i]-'0'; 
    sum = (sum + Math.pow(digit,n)); 
    i++; 
}

if(sum == number) 
{
    console.log(number, "is an Armstrong Number");
    outputString =  number + " is an Armstrong Number"
}
else{
    console.log(number, "is not an Armstrong Number");
    outputString =  number + "is not an Armstrong Number"

}


`
output.innerHTML = outputString

})


areaSquare.addEventListener('click',()=>{
    let side = 4; 
    let area = side * side; 
    console.log(area)

    program.innerHTML = `
    let side = 4; 
    let area = side * side; 
    console.log(area)
    `
    output.innerHTML = area
})


areaRectangle.addEventListener('click',()=>{
    let a = 5;
    let b = 6;
    let area = a * b;
    console.log(area)

    program.innerHTML =`
    let a = 5;
    let b = 6;
    let area = a * b;
    console.log(area)
    
    
    `

    output.innerHTML=area

})




