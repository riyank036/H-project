// function exPromise (){
//     return new Promise (function(resolve) {
//         setTimeout(function() {
//             resolve("Hello Riyank!");
//         }, 2000)
//     });
// }

// // function invoc using .than method 

// exPromise().then(function(message) {
//     console.log(message);
// });

// // function invoc using async function and await 
// async function main(){
//     const value = await exPromise();
//     console.log(value);
// }

// main();  



const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);

function valideteCart(card){
    return true;
  }



function createOrder(cart) {
    return new Promise(function (resolve,reject) {
        if (!valideteCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        const orderId = "12345";
        if (orderId) {
            setTimeout(function() {
                resolve(orderId);
            }, 5000);
        }
    })
}


promise.then(function (orderId) {
    console.log(orderId);
})
.catch(function (err) {
    console.log(err.message);
})


