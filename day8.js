
const {readFileSync} = require("fs")

const contents = readFileSync("./day8input.txt", "utf-8");
const arr = contents.split(/\r?\n/);
let dataArray = [...arr];
console.log(dataArray)

//(1) determine whether there is enough tree cover here to keep a tree house hidden. Do this by counting the number of trees that are visible from outside the grid when looking directly along a row or column. 
//A tree is visible if all of the other trees between it and the edge of the grid are shorted than it. 

//How many trees are visible from outside the grid?

dataArray.forEach((line) => {

    for(let i =0; i<line.length; i++){
        
    }


})



