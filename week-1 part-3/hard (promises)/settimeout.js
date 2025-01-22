/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


async function main() {
    await wait(2);
}
main();

function wait(n) {
    return new Promise (function(resolve,reject) {
        resolve (setTimeout(function() {
        console.log("resolves after " + n + " seconds");
     }, n * 1000));
    });
}

