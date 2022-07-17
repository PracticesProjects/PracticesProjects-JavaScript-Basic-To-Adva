//nested if else if

//winning number is 16
// 17 is too low
//20 is too high

let winningnumber = 19;
let userGuess = + prompt('Enter your guess number');
console.log(typeof userGuess, userGuess); 


if(userGuess === winningnumber)
{
    console.log('Your guess was correct');
}
else{
    if(userGuess < winningnumber){
        console.log("too low !!!");
    }
    else{
    console.log("your guess was wrong");
    }
}