'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the maximumToys function below.
function maximumToys(prices, k) {
    let noSwap
    function swap(arr,i,j) {
        [arr[i], arr[j]] = [arr[j], arr[i]] // es15 way of swapping
        return arr
    }
    for (let i = prices.length; i > 0; i--){
        noSwap = true
        for( let j = 0; j < i ; j++){
            if(prices[j]>prices[j+1]){
                swap(prices,j,j+1)
                noSwap = false
            }
        }
        if(noSwap) break
    }
    let count = 0,
        sum = 0
    for(let l = 0; l < prices.length; l++){
        if(sum < k){
            sum += prices[l]
            count++
        }else break
    }
     return count-1


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const prices = readLine().split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

    let result = maximumToys(prices, k);

    ws.write(result + "\n");

    ws.end();
}
