
// time complexity is O(log N) or  O (1) and space complexity is O(1)

// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]) end = middle - 1;
//         else start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }
//     return arr[middle] === elem ? middle : -1;
// }




function binarySearch(arr,element){
    let left = 0,
        right = arr.length-1,
        middle = Math.floor((left+right)/2)
        while(arr[middle] !== element && left <= right){
            if(arr[middle] > element){
                right = middle-1
            }else{
                    left = middle+1
                }
            middle = Math.floor((left+right)/2)
            }
            return arr[middle] === element ? middle:-1
        }

        console.log(binarySearch([2,5,6,9,13,15,28,30],13)
);



