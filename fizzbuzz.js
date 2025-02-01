

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...

    const formString = (num) => {
        const isMultipleOfThree = !(num % 3);
        const isMultipleOfFive = !(num % 5);
        const isMultipleOfSeven = !(num % 7);
        const isMultipleOfEleven = !(num % 11);
        const isMultipleOfThirteen = !(num % 13);
        const isMultipleOfSeventeen = !(num % 17);
        let output = [];

        if (isMultipleOfThree) {
            output.push('Fizz');
        }  

        if (isMultipleOfThirteen) {
            output.push('Fezz');
        }
        
        if (isMultipleOfFive) {
            output.push('Buzz');
        }  
        
        if (isMultipleOfSeven) {
            output.push('Bang');
        }  
        
        if (isMultipleOfEleven) {
            output = output.filter(value => value === 'Fezz');
            output.push('Bong');
        }  

        if (!!output.length) {
            isMultipleOfSeventeen && output.reverse();
        } else {
            output.push(num);
        }

        return output.join('');
    }

    for (let num = 1; num <= 260; num++) {
        console.log(formString(num))
    }
    
}

// Now we run the main function...
fizzbuzz();
