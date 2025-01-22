function exObjects(obj){

   let keys = Object.keys(obj)
   console.log ("Orignal Objects: " ,obj );
   console.log ("After Object.keys: " ,keys );
   
   let vlaues = Object.values(obj)
   console.log ("Orignal Objects: " ,obj );
   console.log ("After Object.values: " ,vlaues );
   
  let hasProp = obj.hasOwnProperty("Age");
  console.log("After hasOwnPropertty(): ", hasProp);

  let newObj = Object.assign({}, obj);
  console.log("After Object.assign(): ", newObj);

}

const obj ={
  Name: "Riyank",
  Age: 20,
  Gender: "Male",
};

exObjects(obj);