/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */



// async function main() {
//    const value =  await calculateTime(1000,2000,3000);
//     console.log(value)
//  }
 
//  main();
 
function wait1(t) {
   return new Promise (function (resolve) {
    resolve(setTimeout(function(){
    }, t * 1000));
   });
}

function wait2(t) {
  return new Promise(function(resolve) {
    resolve(setTimeout(function() {
    }, t * 1000));
  });
}

function wait3(t) {
   return new Promise (function (resolve) {
    resolve(setTimeout(function(){
    }, t * 1000))
   })
}

 function calculateTime(t1, t2, t3) {
   var startTime = Date.now();
   return Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then(function() {
      var endTime = Date.now();
      return endTime - startTime;
    });
}


calculateTime(4,1,3).then(function(elapsedTime) {
   console.log("Elapsed time: " + elapsedTime + "ms");
});


