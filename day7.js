
const {readFileSync} = require("fs")

const contents = readFileSync("./day6.txt", "utf-8");
const arr = contents.split(/\r?\n/);
let dataArray = [...arr];

//Recursion needs a base case, a recursive case, and a recursive step.

/*
base case/exit case: here, we give a condition under which the function doesn't call itself. 

recursive case: A condition where the function does call itself.

Recurrseive step:

e.g.

function factorial(n) {
    if(n===1) return n;
    return n * recursiveFactorial(n-1)
}
*/

//determine the total size of each directory (=sum of the sizes of the file it contains, directly or indirectly)

console.log(count)
