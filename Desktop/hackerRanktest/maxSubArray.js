function maxSubArray(array,num) {
    if(num > array.length){
        return null
    }
    let tempSum = 0
        maxSum = 0
    for (let i = 0; i < num; i++) {
        maxSum += array[i]
    }
    tempSum = maxSum

    for (let i = num; i < array.length; i++) {
        tempSum = tempSum - array[i - num] + array[i]
        maxSum = Math.max(maxSum,tempSum)
        
    }
    return maxSum
}


console.log(maxSubArray([1,2,9,87,3,4,98,2,74,1,149],3))
