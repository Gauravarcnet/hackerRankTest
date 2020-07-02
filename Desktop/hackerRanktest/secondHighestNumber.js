function secondHighest(array) {
    if(array.length < 1){
        return undefined
    }
    let max,
        max2
    if(array[1] > array[0]){
        max = array[1],
        max2 = array[0]
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
console.log(secondHighest([10,5,3,7,9,2,5,45,79,85,82,115]));
