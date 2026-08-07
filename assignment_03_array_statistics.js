// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readline = require("readline-sync");

// Function to compute the sum
function computeSum(numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

// Function to compute the average
function computeAverage(numbers) {
    let total = computeSum(numbers);
    return total / numbers.length;
}

// Function to find the maximum number
function computeMax(numbers) {
    let maximum = numbers[0];
    for (let num of numbers) {
        if (num > maximum) {
            maximum = num;
        }
    }
    return maximum;   
}

// Function to find the minimum number
function computeMin(numbers) {
    let minimum = numbers[0];
    for (let num of numbers) {
        if (num < minimum) {
            minimum = num;
        }
    }
    return minimum;   
}

// The main program
let n = parseInt(readline.question("How many numbers? "));

if (n <= 0) {
    console.log("Error: Number of items must be a positive integer.");
} else {
    let nums = [];

    for (let i = 0; i < n; i++) {
        let value = parseFloat(readline.question(`Enter number ${i + 1}: `));
        nums.push(value);
    }

    console.log("\nResults:");
    console.log("Sum:     ", computeSum(nums));
    console.log("Average: ", computeAverage(nums));
    console.log("Maximum: ", computeMax(nums));
    console.log("Minimum: ", computeMin(nums));
}
