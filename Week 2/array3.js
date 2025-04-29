/*Want to try a version where instead of just logging the doubled value, you create a new array that holds the doubled numbers?

👉 Example goal:

    Original: [10, 20, 30, 40, 50]

    New array: [20, 40, 60, 80, 100] */

let numbers = [10, 20, 30, 40, 50]
let newArray = []
numbers.forEach(number => {
    newArray.push(number * 2)
    
});
console.log(newArray)
