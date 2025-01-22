const fs = require('fs');
function read(){
    return new Promise( function(resolve,reject) {
        fs.readFile("3-read-from-file.md", "utf-8", function (err,data){
               resolve(data);
            }
        )
    })
} 


async function main() {
    const value =  await read();
    console.log(value);
}

main();

