function secondHighest(array) {
    if(array.length < 1){
        return undefined
    }
    let max,
        max2
    if(array[1] > array[0]){
        max = array[1]
    }else{
        max2 = max
        max = array[1]
    }
    for (let i = 2; i < array.length; i++) {
       if(array[i] >= max ){
           max2 = max
           max = array[i]
       }else if(array[i] >= max2 ){
            max2 = array[i]
       }
        
    }
    return {
        "max1": max,
        "max2": max2
    }
}
console.log(secondHighest([1,5,3,7,9,2,5,45,79,85,15]));
