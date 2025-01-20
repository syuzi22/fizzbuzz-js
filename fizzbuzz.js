

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...

    for (let i = 1; i <= 100; i++) {
        const isMultipleOfThree = !(i % 3);
        const isMultipleOfFive = !(i % 5);

        if (isMultipleOfThree && isMultipleOfFive) {
            console.log('FizzBuzz');
        } else if (isMultipleOfThree) {
            console.log('Fizz');
        } else if (isMultipleOfFive) {
            console.log('Buzz');
        } else {
            console.log(i)
        }
    }

    
}

// Now we run the main function...
fizzbuzz();
