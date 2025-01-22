const { Console } = require('console');

const fs = require('fs').promises

async function writeInFile() {

    try{
        const data = await fs.readFile("4-write-to-file.md", "utf-8");
        fs.writeFile("4-write-to-file.md", data + " Data Adding Proces is Complate Hehe!");
    } catch (err) {
    console.log(err);
    }
}


async function main () {
    await writeInFile();
    console.log("Added Data");
}

main();