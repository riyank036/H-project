// 1. Write a function that finds the sum of two numbers

function sum(a, b) {
    return a + b;
}

// Arrow Function

const sum = (a, b) => a + b;

// 2. Write another function that displays this result in a pretty format

function prettySum(a, b) {
    const num1 = Number(a) || 0;
    const num2 = Number(b) || 0;
    const result = num1 + num2;
    
    console.log(`
    ╔══════════════════════════╗
    ║       SUM RESULT         ║
    ╟──────────────────────────╢
    ║  ${String(num1).padEnd(6)} + ${String(num2).padEnd(6)}  ║
    ║  ──────────────────────  ║
    ║         ${String(result).padEnd(10)}        ║
    ╚══════════════════════════╝
    `);
    
    return result;
}

// 3. Write another function that takes this sum and prints it in passive tense

function passiveSum(a, b) {
    const result = Number(a) + Number(b);
    console.log(`The sum of ${a} and ${b} is calculated to be ${result}.`);
    return result;
}

// Example usage:
passiveSum(7, 3);
// Output: "The sum of 7 and 3 is calculated to be 10."
