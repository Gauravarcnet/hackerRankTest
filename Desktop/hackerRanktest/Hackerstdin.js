'use strict'
const fs = require('fs')
process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = '',
    currentLine = 0


process.stdin.on('data', inputStdin =>{
    inputString += inputStdin 
})

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, '').trim());
    main();
});

function readLine(){
    return inputString[currentLine++]
}

function main() {
    
    let n = parseInt(readLine(),10),
        string = readLine().toLocaleLowerCase().split(''),
        numberOfValley = 0,count = 0

    for (let i = 0; i < n; i++) {
        if (string[i] === 'u') {
            if(numberOfValley >= 0){
                count++
            }
            numberOfValley++
        } else if(string[i] === 'd'){
            numberOfValley--
        }
        
    }
    
        
}
