
//String reverse without using another space array or string time complexity O (N)
// function reverse(str) {
//     str = str.split('')
//     for (let i = 0; i <= Math.floor((0+str.length)/2); i++) {
//        let temp = str[i]       
//        console.log(str[str.length-i-1])
//        str[i] = str[str.length-i-1]
//        console.log(str[i])
//        str[str.length-i-1] = temp
//     }
//     return str.join("")
// }
// console.log(reverse("gaura"));

function reverse(str) {
    str = str.split('')
    for (let i = 0; i <= Math.floor((0+str.length)/2); i++) {
        if(str[i] !== str[str.length-i-1]) return "Not palindrome"

    }
    return "Palindrome"
}
console.log(reverse("agurav"));
