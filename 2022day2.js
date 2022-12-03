const {readFileSync} = require("fs")
function readData(data){
    const contents = readFileSync(data, "utf-8")

    const arr = contents.split(/\r?\n/)
    let dataArr = [...arr]
    let points = 0

    dataArr.forEach((match) => {
       
        if(match[2] === "X" && match[0] === "A"){
            console.log("in")
        } else if (match[2] === "X" && match[0] === "B"){
            points+=1
        } else if (match[2] === "X" && match[0] === "C"){
            points +=2
        } else if (match[2] === "Y" && match[0] === "A"){
            points += 4
        } else if (match[2] === "Y" && match[0] === "B"){
            points+=5
        } else if (match[2] === "Y" && match[0] === "C"){
            points +=6
        } else if (match[2] === "Z" && match[0] === "A"){
            points +=8
        } else if (match[2] === "Z" && match[0] === "B"){
            points +=9
        } else if (match[2] === "Z" && match[0] === "C"){
            points+=7
        }      
    })

   return points

}

console.log(readData("./2022day3input.txt"))