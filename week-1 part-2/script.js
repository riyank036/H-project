
                //    Simple primitives

// 1. Write the program to greet a person given their frst and last name 

// let firstName = "Riyank";
// let lastName = "Patel";
// console.log ("Hello, " + firstName + " " + lastName + " Nice to meet you." )



// 2. Write a program that greets a person based on their gender. (If else)

// let personArray = ["Riyu", "Semu", "Tamu"];
// let genderArray = ["male", "male", "female"];

// for (let i = 0; i<personArray.length; i++){
//     if (genderArray [i]== "male"){
//         console.log (personArray[i]);
//     }
// }



// 3. Write a program that counts from 0 - 1000 and prints (for loop)

// for (let i = 0; i<=1000; i++){
//    console.log(i);
// }



                 //   Complex primitives


// 1. Write a program prints all the even numbers in an array

// let evenNumbersArrey = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// for (let i = 0; i < evenNumbersArrey.length; i++){
//     if ( evenNumbersArrey[i] % 2 === 0 ){
//         console.log(evenNumbersArrey[i]);
//     }
// }



// 2. Write a program to print the biggest number in an Array

// let numberArray = [56,78,95,12,2,65,48,65,89,56,95];
// let biggestNumber = numberArray[0];

// for (let i = 0; i < numberArray.length; i++){
//     if (numberArray[i] > biggestNumber){
//         biggestNumber = numberArray[i];
//     }
// }
// console.log ("Biggest number in an Array is " + biggestNumber);



// 3. Write a program that prints all the male people’s first name given a complex object 

// const allPeoples = [{
//     firstName: "Riyu",
//     gender: "Male",
// },{
//     firstName: "Semu",
//     gender: "Male",
// },{
//     firstName: "Deddu",
//     gender: "Male",
// },{
// },{
//     firstName: "Baa",
//     gender: "Female",
// },{
//     firstName: "Mumma",
//     gender: "Female",
// }];

// for (let i = 0; i < allPeoples.length; i++){
//     if( allPeoples[i] ["gender"] == "Male") {
//         console.log (allPeoples[i]["firstName"]);
//     }
// } 



//4. Write a program that reverses all the elements of an array








                // Functions 

//1. Write a function that finds the sum of two numbers 

// function sum (num1, num2, fnToCall){
//     let result = num1 + num2;
//     fnToCall(result) ;
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log( "Sum's result is : " + data);
// }

// // Yor are onlt allowed to call one function after this
// // How will you displayResult of sum 


// const ans = sum(15,21,displayResult);



              // calculater

// function calculater(a,b,oprator){
//     if (oprator == "+"){
//         const value = sum(a,b);
//         return value;
//     } if (oprator == "-"){
//         const value = sub(a,b);
//         return value;
//     } if (oprator == "*"){
//         const value = mul(a,b);
//         return value;
//     } if (oprator == "/"){
//         const value = div(a,b);
//         return value;
//     } if (oprator == "%"){
//         const value = per(a,b);
//         return value + "%";
//     }
// }

// function sum(a,b){
//     return a + b;
// }
// function sub(a,b){
//     return a - b;
// }
// function mul(a,b){
//     return a * b;
// }
// function div(a,b){
//     return a / b;
// }

// function per(a,b){
//     return (a / b) * 100 
// }
// const answer = calculater(600,600,"%");
// console.log(answer);



