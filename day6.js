
const {readFileSync} = require("fs")

const contents = readFileSync("./day6.txt", "utf-8");
const arr = contents.split(/\r?\n/);
let dataArray = [...arr];

//Need to add a subroutine to the device that detects a start-of-packet marker in the datastream. 

//indicated by a sequence of 4 characters that are all different. 

//Subroutine needs to identify the first position where the 4 most recently received characters were all different; needs to report the number of characters from the beginning of the buffer to the end of the first such 4-character marker. 
let value = 0
console.log(contents.length)
for (let i=3; i<contents.length; i++){
  

    // if(contents[i] !== contents[i-1] && contents[i] !== contents[i-2] && contents[i] !== contents[i-3] && contents[i-1] !== contents[i-2] && contents[i-1] !== contents[i-3] && contents[i-2] !== contents[i-3]){
    //     console.log(contents[i])
    //     value += (i++)
    //     break
    // }

    if(contents[i] !== contents[i-1] !== contents[i-2] !== contents[i-3]){
        value += i
        break
    }

}

const windowLength = 14

let window = [];
let count = 0

for (let i=0; i<contents.length; i++){
    window.push(contents[i])
    if(window.length > windowLength){
        window.shift()
    }
    if (window.length === windowLength && new Set(window).size === windowLength){   count = i+1
        break
    }
}

console.log(count)
