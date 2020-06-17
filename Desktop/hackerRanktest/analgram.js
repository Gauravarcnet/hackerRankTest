
//time complexity O (N) and space complexity O(N)
function analgram(str1, str2) {
    
    str1 = str1.replace(/[\W_]+/g,"").toLowerCase()
    str2 = str2.replace(/[\W_]+/g,"").toLowerCase()

    let lookup = {}

    if(str1.length !== str2.length)
        return false
    
    for (let letter of str1) {
        lookup[letter] = lookup[letter]+1 ||1
    }

    for (let letter of str2) {
        
        if(! lookup[letter]){
            return false
        }else{
            lookup[letter]--
        }
    }
    return true


}
console.log(analgram('hearster',"earther"));
