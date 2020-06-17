
//Only work with sorted array
function countUniqueValues(array) {
    let counter = 0
    for (let j = 0; j < array.length; j++) {
        if(array[j] == array[j+1]){
            counter++
        }
        
    }
    return counter

}

console.log(countUniqueValues([1,2,2,5,7,7,99,2]));

