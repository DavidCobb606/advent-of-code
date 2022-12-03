const { count } = require("console")
const {readFileSync} = require("fs")


const readData = (data) => {

    //part 1

    const contents = readFileSync(data, "utf-8")
    const arr = contents.split(/\r?\n/)
    
   let dataArray = [...arr]
    let countArray = []
    let iValue = 0
    let value = 0

    for (let i=0; i<dataArray.length; i++){
        
        if(dataArray[i] !== ""){
            while (dataArray[i] !==""){
             
            
            value += parseInt(dataArray[i])
            i++
                
            }  
            countArray.push(value)      
        iValue ++
        value = 0
        }

       
    }
    
   

    countArray.sort(function(a,b){
        return a-b
    })
  

    let maxValue = countArray[countArray.length-1]

    //part 2
    let secondLargestValue = countArray[countArray.length-2]
    let thirdLargestValue = countArray[countArray.length-3]


    return maxValue + secondLargestValue + thirdLargestValue

}






console.log(readData("./2022day2input.txt"))
