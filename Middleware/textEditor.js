const fs = require("fs");
const path = require("path");
const Editor = (text, name, age) => {
  text += `{ text: "${name}", age: ${age} }`;
  console.log("File Editted");
  return text;
};

const writeData = async () => {
  try {
    const writeData = async () => {
      const data = await (
        await fsPromise.readFile(path.join(__dirname, "text.txt"))
      ).toString();
      return data;
    };
    writeData();
  } catch (error) {
    console.error(error);
  }
};

module.exports = writeData;
