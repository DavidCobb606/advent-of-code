const { count } = require("console")
const {readFileSync} = require("fs")


const readData = (data) => {

    //part 1

    const contents = readFileSync(data, "utf-8")
    const arr = contents.split(/\r?\n/)
    
   let dataArray = [...arr]
    

    // let practice = [["Z", "N"], ["M", "C", "D"], ["P"]]

    // let practiceInstructions = [
    //     "move 1 from 2 to 1", 
    //     "move 3 from 1 to 3", 
    //     "move 2 from 2 to 1", 
    //     "move 1 from 1 to 2"
    // ]    
    let stack1 = ["B", "S", "V", "Z", "G", "P", "w"]
    let stack2 = ["J", "V", "B", "C", "Z", "F"]
    let stack3 = ["V","L","M","H","N","Z","D","C"]
    let stack4 = ["L", "D", "M", "Z", "P", "F", "J", "B"]
    let stack5 = ["V", "F", "C", "G", "J", "B", "Q", "H"]
    let stack6 = ["G", "F", "Q", "T", "S", "L", "B"]
    let stack7 = ["L", "G", "C", "Z", "V"]
    let stack8 = ["N", "L", "G"]
    let stack9 = ["J", "F", "H", "C"]


    let actualStacks = [["B", "S", "V", "Z", "G", "P", "W"], ["J", "V", "B", "C", "Z", "F"], ["V","L","M","H","N","Z","D","C"], ["L", "D", "M", "Z", "P", "F", "J", "B"], ["V", "F", "C", "G", "J", "B", "Q", "H"], ["G", "F", "Q", "T", "S", "L", "B"], ["L", "G", "C", "Z", "V"], ["N", "L", "G"], ["J", "F", "H", "C"] ]
    let instructionsNumArray= []
    let instructionsParsed = []

    //convert the written instructions into numbers(strings)

    dataArray.forEach((line) => {   
          //make sure to use + when doing regex for digits! set me back 30 mins or so because it was splitting the digits rather than passing together. 
        const regex = /\d+/g
        instructionsNumArray.push([line.match(regex)].flat())
    })
    
   instructionsNumArray.pop()
    console.log(instructionsNumArray[instructionsNumArray.length-1])
   
   //convert strings into numbers
    instructionsNumArray.forEach((line) => {

        if(line.length>3){
            console.log(line, "<=== >3")
        }
        
        for(let i =0; i<line.length; i++){
           
            line[i] = parseInt(line[i]) 
                 
        }
    })

    function moveAround(instructions, stacks){
        let count = 0

        //  console.log(instructions[0], "<====instructions")
        //  console.log(stacks[0], "<==== stacks")

        instructions.forEach((instructionLine) => {
            count++
           
            // console.log(stacks[instructionLine[1]-1],"<,== stack", instructionLine[1]-1,"<-= index value", count,"<= count")

            let tempArr = stacks[instructionLine[1]-1].slice(-instructionLine[0])                   
          
            
            stacks[instructionLine[2]-1].push(tempArr.flat())
            
            

           
        })
    }


    moveAround(instructionsNumArray, actualStacks)

        console.log(actualStacks, "<====== stacks post function")

    // let cratesOnTop = []
    // actualStacks.forEach((stack) => {

    //     cratesOnTop.push(stack.pop())


    // })

    // console.log(cratesOnTop)

  

}






console.log(readData("./day5input.txt"))
