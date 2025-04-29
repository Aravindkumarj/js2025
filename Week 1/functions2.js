//A function isEven that takes 1 number and returns true if it’s even, false otherwise.

function isEven(A) {
    let remainder = 0
    for (i = 2; i < A; i++) {
        remainder = A % i
        if (remainder == 0) {
            return 'Even'
            break
        }
        if (remainder == 1) {
            return 'Odd'
            break
        }
        continue
    }
}

console.log(isEven(31))