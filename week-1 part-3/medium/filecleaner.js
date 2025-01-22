const fs = require('fs').promises

async function removeExtraSpaces(filePath) {
  try {
    const text = await fs.readFile(filePath, 'utf8');
    const newText = text.replace(/\s+/g, ' ');
    await fs.writeFile(filePath, newText);
    console.log('Done!');
  } catch (err) {
    console.error(err);
  }
}

// example usage
removeExtraSpaces('example.txt');