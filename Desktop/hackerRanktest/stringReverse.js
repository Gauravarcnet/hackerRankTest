// function reverse(str) {
//     return str.trim().split("").reverse().join("")
// }


// Without reverse method   

function reverse(str) {                 //////// time complexity O(n) an dspace complexity O(n)
    let strArray = str.trim().split("")
    let revStr = ''
    for (const char of strArray) {
        revStr = char+revStr
    }
    return revStr
}
console.log(reverse("gau"));
