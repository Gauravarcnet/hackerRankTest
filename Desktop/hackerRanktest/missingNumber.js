
function missingNumber(array) {
    if(array.length<1){
        return undefined
    }
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }   
    let TotalSum = (array.length+2)*((array.length+1)/2)
    let missingNumberRes = TotalSum-sum
    return missingNumberRes

}
console.log(missingNumber([1,2,3,4,5,6,8]));
