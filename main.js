
console.log('Task-1')

let number2 = 0;
while (number2 <= 100) {
      if (number2 % 2 === 0  && number2 % 3 === 0)  {
        console.log(number2, 'Fizz Bazz');
    } else if (number2 % 2 === 0 ) {
        console.log(number2, 'Fizz');
    } else if (number2 % 3 === 0 ) {
        console.log(number2, 'Bazz');
    } else {
    console.log(number2);
    }
    number2++; 
}

console.log('Task-2'); 

for ( i = 1000; i > 49; i -=7) {
 if (i % 2 === 0)  {
  console.log(i, 'the number is Even');
     } else {
        console.log(i, 'the number is Odd');
     }
    }
    
