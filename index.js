/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator(){

    const operator = process.argv[2]; 
    const numberStrings = process.argv.slice(3);  
    const numbers = [];  
    
    for (const string of numberStrings) {   
      numbers.push(Number(string)); 
    }

    if (!operator) {  
      return "No operation provided...";
    }

    if (!numbers.length) {  
      return "No numbers provided...";
    }

    if (operator === "plus") {
      let total = 0;
      for (const number of numbers) {
        total += number;  
      }

      return total;
    }

    if (operator === "minus") {
      let solution = numbers[0];  
      for (let i = 1; i < numbers.length; i++) {
        solution -= solution[i];
      }

      return solution;
    }

    return `Invalid operation: ${operator}`;
  }
 

  console.log(calculator())

    





// Don't change anything below this line.
module.exports = calculator;



