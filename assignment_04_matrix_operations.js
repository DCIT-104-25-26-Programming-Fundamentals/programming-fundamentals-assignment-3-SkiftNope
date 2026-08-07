// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readline = require('readline-sync');

// Helper function: Read a matrix
function readMatrix(rows, cols, name) {
    let matrix = [];
    console.log(`\nEnter values for ${name}:`);
    for (let i = 0; i < rows; i++) {
        let rowInput = readline.question(`Row ${i + 1}: `);
        let row = rowInput.split(' ').map(Number);
        if (row.length !== cols) {
            console.log(`Error: Row must have exactly ${cols} numbers.`);
            i--; // retry this row
        } else {
            matrix.push(row);
        }
    }
    return matrix;
}

// Helper function: Print matrix neatly
function printMatrix(matrix, title) {
    console.log(`\n${title}:`);
    for (let row of matrix) {
        console.log(row.map(num => num.toString().padStart(5, ' ')).join(''));
    }
}

// PART A — Transpose
function transpose(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = [];
    for (let j = 0; j < cols; j++) {
        let newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

// PART B — Add Two Matrices
function addMatrices(A, B) {
    let rows = A.length;
    let cols = A[0].length;
    let result = [];
    for (let i = 0; i < rows; i++) {
        let newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(A[i][j] + B[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

// PART C — Multiply Two Matrices
function multiplyMatrices(A, B) {
    let rowsA = A.length;
    let colsA = A[0].length;
    let rowsB = B.length;
    let colsB = B[0].length;

    if (colsA !== rowsB) {
        console.log("Error: Columns of first matrix must equal rows of second.");
        return null;
    }

    let result = [];
    for (let i = 0; i < rowsA; i++) {
        let newRow = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += A[i][k] * B[k][j];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

// MAIN PROGRAM
console.log("=== MATRIX OPERATIONS ===");

// Part A: Transpose
let rowsA = readline.questionInt("\nEnter rows for Matrix A: ");
let colsA = readline.questionInt("Enter cols for Matrix A: ");
let A = readMatrix(rowsA, colsA, "Matrix A");
printMatrix(A, "Original Matrix A");
let AT = transpose(A);
printMatrix(AT, "Transposed Matrix A");

// Part B: Add Two Matrices
let rowsB = readline.questionInt("\nEnter rows for Matrix B: ");
let colsB = readline.questionInt("Enter cols for Matrix B: ");
let B = readMatrix(rowsB, colsB, "Matrix B");

let rowsC = readline.questionInt("Enter rows for Matrix C: ");
let colsC = readline.questionInt("Enter cols for Matrix C: ");
let C = readMatrix(rowsC, colsC, "Matrix C");

if (rowsB === rowsC && colsB === colsC) {
    let sum = addMatrices(B, C);
    printMatrix(B, "Matrix B");
    printMatrix(C, "Matrix C");
    printMatrix(sum, "B + C");
} else {
    console.log("Skipping addition: Matrices must be same size.");
}

// Part C: Multiply Two Matrices
let rowsD = readline.questionInt("\nEnter rows for Matrix D: ");
let colsD = readline.questionInt("Enter cols for Matrix D: ");
let D = readMatrix(rowsD, colsD, "Matrix D");

let rowsE = readline.questionInt("Enter rows for Matrix E: ");
let colsE = readline.questionInt("Enter cols for Matrix E: ");
let E = readMatrix(rowsE, colsE, "Matrix E");

let product = multiplyMatrices(D, E);
if (product) {
    printMatrix(D, "Matrix D");
    printMatrix(E, "Matrix E");
    printMatrix(product, "D x E");
}
