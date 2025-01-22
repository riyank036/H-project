const fs = require('fs').promises;

async function write() {
try {
const data = await fs.readFile("4-write-to-file.md", "utf-8");
await fs.writeFile("4-write-to-file.md", data + "Riyank Patel Add something in this file");
} catch (err) {
console.error(err);
}
}

async function main() {
await write();
console.log("Write operation complete");
}

main();
Riyank Patel Add something in this fileData Adding Proces is Complate Hehe! Data Adding Proces is Complate Hehe!