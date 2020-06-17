
// time complexity is O(N) ans space complexity is O(1)

function vowel(str) {

    str = str.toLowerCase()
    const vowel = 'aeiou'
    let count = 0
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i]

        for (let j = 0; j < vowel.length; j++) {
            let vowel1 = vowel[j]

            if(vowel1 === char){
                count++
            }
            
        }
        
        
    }
    console.log(count);

}
vowel('abdbdcasidenwsmc')