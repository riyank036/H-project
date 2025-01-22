function exJson (jsonString){
   console.log ("Orignal String: ", jsonString );


   let parsedObject = JSON.parse(jsonString);
   console.log("After Parsed String: ", parsedObject );

   let jsonStringified = JSON.stringify(parsedObject);
   console.log("After value: " , jsonStringified );

}

const sampleJSONString = '{"name":"Riyank", "age":20, "gender":"male"}'

exJson(sampleJSONString);


