// 1. Arrays
// 2. Objects

// 1. Write a program prints all the even numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

// 2. Write a program to print the biggest number in an arrya 
const numbers2 = [4, 8, 2, 15, 3, 9];

let biggest = numbers2[0]; // Start with first element

// Loop through array
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > biggest) {
        biggest = numbers2[i];
    }
}

console.log("Biggest number:", biggest); // Output: 15

// 3. Write a program that prints all the male people’s first name given a complex object 
const allUsers = [{
    firstName: "Riyank",
    gender: "male"
}, {
    firstName: "Sem",
    gender: "male"
}, {
    firstName: "Jenny",
    gender: "female"
},]

for (let i = 0; i<allUsers.length; i++) {
    if (allUsers[i] ["gender"] == "male") {
        console.log(allUsers[i] ["firstName"])
    }
}

// 4. Write a program that reverses all the elements of an array

// Using Built-in reverse() Method

// Original array (will be modified)
const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]

// Manual Reversal (Without Built-in Methods)

const original = ['a', 'b', 'c', 'd'];
const reversed = [];

// Loop backward and push elements
for (let i = original.length - 1; i >= 0; i--) {
    reversed.push(original[i]);
}

console.log(reversed); // Output: ['d', 'c', 'b', 'a']
