const fs = require("fs")

//write a file
fs.writeFileSync("firstFile.txt", "My first file")

//read the file
const content = fs.readFileSync("/Users/I058626/JS/js2025/Week5/firstFile.txt", "utf-8")
console.log("File Content:", content)