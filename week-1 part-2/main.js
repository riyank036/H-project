                //Simple primitives

//1. Write the program to greet a person given their first and last name 

// let firstName = "Riyank";
// let lastName = "Patel";

// console.log ("Hello! " + firstName + " " + lastName + " Nice to meet you ");



//2. Write a program that greets a person based on their gender. (If else)

// let personName = ["Riyu", "Semu", "Deddu", "Mumma", "Baa"];
// let personGender = ["Male", "Male", "Male", "Female", "Female"];

// for (let i = 0; i < personName.length;  i++){
//     if( personGender[i] == "Male"){
//         console.log ("Hello Mr " + personName[i]);
//     } else {
//         console.log ("Hello Mrs " + personName[i]);
//     }
// }



//3. Write a program that counts from 0 - 1000 and prints (for loop)

// for ( let i = 0; i < 1001;i++){
//     console.log ( i );

// }



              // Complex primitives

              

//1.   Write a program prints all the even numbers in an array 

// let numberAraay = [54, 57, 25, 68, 58, 69, 100, 64];

// for ( let i = 0; i < numberAraay.length; i++){
//     if ( numberAraay[i] % 2 == 0){
//         console.log (numberAraay[i]);
//     }
// }



//2. Write a program to print the biggest number in an arrya

// let numbersArray = [2, 110, 69, 455, 35, 54, 54, 34, 24 ];
// let biggestNumber = numbersArray[0];

// for ( let i = 0; i < numbersArray.length; i++){
//     if ( numbersArray[i] > biggestNumber){
//         biggestNumber = numbersArray [i];
//     }
// }



// console.log (biggestNumber);

//3. Write a program that prints all the male people’s first name given a complex object 

// let allPepole = [ 
//     {
//         firstName: "Riyu",
//         gender: "Male",
//     },{
//         firstName: "Baa",
//         gender: "Female",
//     },{
//         firstName: "Deddu",
//         gender: "Male",
//     },{
//         firstName: "Mumma",
//         gender: "Female",
//     },{
//         firstName: "Semu",
//         gender: "Male",
//     }
// ];

// for (let i = 0; i < allPepole.length; i++){
//     if (allPepole[i] ["gender"] == "Male"){
//         console.log ( allPepole [i] ["firstName"]);
//     }
// }



//4. Write a program that reverses all the elements of an array

// function mainFun (num1, num2, fnToCall){
//     outcome = num1 + num2;
//     fnToCall(outcome);
// }

// function subFun (type){
//     console.log ( " The Number Of Num1 And Num is " + type)
// } 

// mainFun(15,21, subFun);



          // Calculater

// function calculater ( a , b , operation ){

//     if ( operation == sum){
//         const value = sum(a,b)
//         return value;
//     }

//     if ( operation == sub){
//         const value = sub(a,b);
//         return value;
//     }
//     if (operation == mul){
//         const value = mul (a,b);
//         return value;
//     } if (operation == div){
//         const value = div (a,b)
//         return value;  
//     }
// }

// function sum (a,b){
//   return a + b;
// }

// function sub (a,b){
//     return a - b;
// }

// function mul (a,b){
//     return a * b;
// }

// function div (a,b){
//     return a / b;
// }
// const value = calculater(10,2,mul);
// console.log(value);



// Run each function to see the output, play and learn by doing.

// Length
// function getLength (str){
//   console.log ("String name is: " + str);
//   console.log ("string length: " + str.length);
// }

// getLength("Riyank Patel");



// indexOf and lastIndexOf

function findIndexOf(str, target){
      console.log ("Original String:" , str);
      console.log ("Index:" , str.lastIndexOf(target));
    }
    findIndexOf("Riyank Patel Patel Riyank Patel", "Patel");

