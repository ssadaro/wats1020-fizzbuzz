 // Place your FizzBuzz code here. 

// Count numbers 1 to 20 to see if divisible by 3 or 5 or both
for (i=1; i<=20; i++){
    // Each number do the following checks

    // if divisible by 3
    if (i % 3 === 0){
        // If so see if it is Also divisible by 5
        if (i % 5 === 0){
          // If divisible by 3 and 5 Print: FizzBuzz
          console.log('FizzBuzz');
        } else {
          // if only divisible by 3: Print Fizz
          console.log('Fizz');
        }
    } else if (i % 5 === 0){
      // If divisible by 5
      // if so: Print Buzz
      console.log ('Buzz');
    }else {
       // If not divisible by 3 or 5
      // If so: Print number 
      console.log(i);
    }
 
}


