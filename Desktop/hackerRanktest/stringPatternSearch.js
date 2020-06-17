
// time complexity is O(M* N) ans space complexity is O(1)

function stringPattern(text, pattern) {
    let count = 0
    for (let index = 0; index < text.length; index++) {
        for (let j = 0; j < pattern.length; j++) {
            let element = pattern[j]

            if(pattern[j] !== text[index+j]){
                break
            }

            if(j === pattern.length-1){
                count++
            }
        }        
    }
    return count
}

console.log(stringPattern("lololol","lol"));
