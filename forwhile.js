//intro to for while loop

//print o to 9

for(let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log("Value of i is ", i);


// for loop example

let total = 0;

let num = 10;

for( let i = 0; i < num; i++ ) {
    total += i;
}
console.log(total);

//break keyword

for( let i = 0; i <=10; i++ )
{
    if( i == 4 )
    {
        break;
    }
    console.log(i);
}

//continue keyword

for (let i = 0; i <= 10; i++) {
  if (i == 4) {
    continue;
  }
  console.log(i)
}
