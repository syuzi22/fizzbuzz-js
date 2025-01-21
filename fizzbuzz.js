

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...

    const formString = (num) => {
        const isMultipleOfThree = !(num % 3);
        const isMultipleOfFive = !(num % 5);
        const isMultipleOfSeven = !(num % 7);
        const isMultipleOfEleven = !(num % 11);
        let result = '';

        if (isMultipleOfThree) {
            result += 'Fizz'
        }  
        
        if (isMultipleOfFive) {
            result += 'Buzz';
        }  
        
        if (isMultipleOfSeven) {
            result += 'Bang';
        }  
        
        if (isMultipleOfEleven) {
            result += 'Bong';
        }  
        
        if (!result) {
            result = num;
        }
        

        return result;
    }

    for (let num = 1; num <= 100; num++) {
        console.log(formString(num))
    }
    
}

// Now we run the main function...
fizzbuzz();
