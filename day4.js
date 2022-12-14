const {readFileSync} = require("fs")


const readData = (data) => {
    const contents = readFileSync(data, "utf-8");
    const arr = contents.split(/\D/);
   
   
    
    let arrForm = []
    let indexCount = 1


    let parsedArr = arr.map((element) => {
        return parseInt(element)
    })

    console.log(parsedArr)


    let count =0

    for (let i=0; i<parsedArr.length; i++){
           if(indexCount%4 === 0){
         
            if((parsedArr[indexCount-4]>=parsedArr[indexCount-2] &&             
                parsedArr[indexCount-3] <= parsedArr[indexCount-1]) 
                || 
                (parsedArr[indexCount-4]<=parsedArr[indexCount-2] && 
                parsedArr[indexCount-3] >= parsedArr[indexCount-1]))             
            {
                
                count ++
           
            }
        
          
            
        }
        indexCount ++
    }



//part 2

let secondCount = 0

indexCount = 0

for (let i=0; i<parsedArr.length; i++){
    
    if(indexCount%4 === 0){
        
      
     if(parsedArr[indexCount-3]>=parsedArr[indexCount-2] && parsedArr[indexCount-4]<= parsedArr[indexCount-1]){
   
        
         secondCount ++
    
     }
 
   
     
 }
 indexCount ++
}

console.log(secondCount)


}
console.log(readData("./day4input.txt"))
