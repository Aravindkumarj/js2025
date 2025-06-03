const { error } = require("console")
const fs = require("fs")

//write a file
fs.writeFile("SecondFile", "My second file", (err) => {
    if (err) {
        console.log("Error writing the file:", err)
        return
    }
})

fs.readFile("SecondFile", "utf-8", (err, content) => {
    if (err) {
        console.log("Error reading file", err)
        return
    }
    console.log("File contents:", content)
})