function stringSearch(longString,smallString) {
    let count = 0

    for (let i = 0; i < longString.length; i++) {
        for (let j = 0; j < smallString.length; j++) {
            if(smallString[j] !== longString[i+j]){
                break;
            }    
           if(j === smallString.length-1){
            count++
           }
        }        
    }
    return count
}

console.log(stringSearch("gaurauv","au"));
