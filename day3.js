const { count } = require("console")
const {readFileSync} = require("fs")


const readData = (data) => {
    const contents = readFileSync(data, "utf-8")
    const arr = contents.split(/\r?\n/)
    
    let dataArray = [...arr]

    let practiceArr = [
        "vJrwpWtwJgWrhcsFMMfFFhFp", 
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
        "PmmdzqPrVvPwwTWBwg",
        "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
        "ttgJtRGJQctTZtZT",
        "CrZsJsPPZsGzwwsLwLmpwMDw"
    ]
    console.log(practiceArr[0].length/2)
    


   //2 components. All items of a given type are meant to go into 1 of 2 compartments. This is not currently the case for 1 item type per rucksack. 
   //Every item type is identified by a single lowercase or uppercase letter.  e.g. A and a refer to diff types of items. 

   //List of items for each rucksack is given as characters all on 1 line. Any given rucksack has the same number of items in each of its compartments. First half represents items in the first component; second half of the characters represent items in the second compartment. 

    //Every item type can be covnerted to a priority: lowercase items a-z have priorities 1-26.
    // uppercase items A-Z have priorities 27-52.

    //find the item type that appears in both compartments of each rucksack, and find the sum of those item types. 

    let comparisionArr = []
    let sharedValues = []
    const alphabetConversion =[]
    
    String.fromCharCode()
    
    practiceArr.forEach((rucksack) => {

        for (let i=0; i<rucksack.length; i++){
            if(i<rucksack.length/2){
                
                comparisionArr.push(rucksack[i])
                
            } else if (i>=rucksack.length/2){

                if(comparisionArr.includes(rucksack[i])){
                    sharedValues.push(rucksack[i])
                    break

                }              
            }          
        }
    comparisionArr = []
    })

    for (let i=0; i<sharedValues.length; i++){
        alphabetConversion.push(sharedValues[i].charCodeAt(0))
    }

    console.log(alphabetConversion)
    let lettersArr = ["a", ""]


    console.log(comparisionArr, "<==== compArr")
    console.log(sharedValues, "<==== sharedValues")


}


console.log(readData("./day3input.txt"))
