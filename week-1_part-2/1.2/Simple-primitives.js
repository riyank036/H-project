// 1. Write the program to greet a person given their first and last name

const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
alert(`Hello, ${firstName} ${lastName}!`);


// 2. Write a program that greets a person based on their gender. (If else)

const name = prompt("Enter your name:");
const gender = prompt("Enter your gender (male/female/other):");

if (gender.toLowerCase() === "male") {
    alert(`Good day, Sir ${name}!`);
} else if (gender.toLowerCase() === "female") {
    alert(`Good day, Madam ${name}!`);
} else {
    alert(`Good day, ${name}!`);
}

// 3. Write a program that counts from 0 - 1000 and prints (for loop)

for (let i = 0; i <= 1000; i++) {
    console.log(i);
}

// Count in reverse (1000 to 0)
for (let i = 1000; i >= 0; i--) {
    console.log(i);
}

// Count even numbers only
for (let i = 0; i <= 1000; i += 2) {
    console.log(i);
}

// Add commas as thousand separators
for (let i = 0; i <= 1000; i++) {
    console.log(i.toLocaleString()); // Prints "0", "1", ... "1,000"
}

// incriment numbers 

let answer = 0;

for (let i = 0; i <=1000; i++) {
   // answer = answer + 1;
    answer ++
}
console.log(answer);