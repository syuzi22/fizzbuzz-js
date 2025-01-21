

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...

    for (let num = 1; num <= 100; num++) {
        const isMultipleOfThree = !(num % 3);
        const isMultipleOfFive = !(num % 5);
        const isMultipleOfSeven = !(num % 7);

        if (isMultipleOfSeven && isMultipleOfThree) {
            console.log('FizzBang');
        } else if (isMultipleOfSeven && isMultipleOfFive) {
            console.log('BuzzBang');
        } else if (isMultipleOfThree && isMultipleOfFive) {
            console.log('FizzBuzz');
        } else if (isMultipleOfThree) {
            console.log('Fizz');
        } else if (isMultipleOfFive) {
            console.log('Buzz');
        } else if(isMultipleOfSeven) {
            console.log('Bang');
        } else {
            console.log(num)
        }
    }

    
}

// Now we run the main function...
fizzbuzz();
