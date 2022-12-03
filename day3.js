const { count } = require("console")
const {readFileSync} = require("fs")


const readData = (data) => {
    const contents = readFileSync(data, "utf-8");
    const arr = contents.split(/\r?\n/);
    let dataArray = [...arr];
    let comparisionArr = [];
    let sharedValues = [];
    let count = 0;
    const alphabetConversion = {
        a: 1,
        b:2,
        c:3,
        d:4,
        e:5,
        f:6,
        g:7,
        h:8,
        i:9,
        j:10,
        k:11,
        l: 12,
        m: 13,
        n:14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26,
        A: 27,
        B: 28,
        C: 29,
        D: 30,
        E: 31, 
        F: 32,
        G: 33,
        H: 34,
        I: 35,
        J: 36,
        K: 37,
        L: 38,
        M: 39,
        N: 40,
        O: 41,
        P: 42,
        Q: 43,
        R: 44,
        S: 45,
        T: 46,
        U: 47,
        V: 48,
        W: 49,
        X: 50,
        Y: 51,
        Z: 52
    }
    
    dataArray.forEach((rucksack) => {

        for (let i=0; i<rucksack.length; i++){
            if(i<rucksack.length/2){
                
                comparisionArr.push(rucksack[i]);
                
            } else if (i>=rucksack.length/2){

                if(comparisionArr.includes(rucksack[i])){
                    sharedValues.push(rucksack[i]);
                    break;

                }              
            }          
        }
    comparisionArr = []
    })

    for(let i=0; i<sharedValues.length; i++){
        count += alphabetConversion[sharedValues[i]];
    }
    
//part 2

    let secondComparisionArr = [];
    let secondSharedValues = [];
    let thirdComparisionArr = [];
    let index = 0;
    let count2 = 0;

    const part2AlphabetConversion = {...alphabetConversion}



    dataArray.forEach((rucksack) => {
    
        if(index===0){
            for (let i=0; i<rucksack.length; i++){
                secondComparisionArr.push(rucksack[i])
    
            }  
            index++
        } else if (index===1){
            for (let i=0; i<rucksack.length; i++){
                if(secondComparisionArr.includes(rucksack[i])){
                thirdComparisionArr.push(rucksack[i])
                } 
            }
            index++
        
        } else if (index===2){

            for (let i =0; i<rucksack.length; i++){
                
                if(thirdComparisionArr.includes(rucksack[i])){
                    secondSharedValues.push(rucksack[i])
                    break
                }
            }
            index = 0
            secondComparisionArr = []
            thirdComparisionArr = []
        }
    })

    for(let i=0; i<secondSharedValues.length; i++){
    count2 += alphabetConversion[secondSharedValues[i]]
    }
    return count2
}


console.log(readData("./day3input.txt"))
