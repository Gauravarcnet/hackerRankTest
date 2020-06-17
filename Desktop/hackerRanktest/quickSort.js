/**
 * it work on the same assumption as merge sort but better than merge merge
 * time complexity best and average is O(n log n)
 * worst situation o(n^2) where our array is almost sorted  from starting side
 * 
 */

 function pivot(arr, start = 0, end = arr.length+1 ) {

    function swap(array, index1, index2) {
        [array[index1], array[index2]] = [array[index2], array[index1]]
        return array
    }

    let pivot = arr[start]
        swapIndex = start
    for (let i = start+1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
        
    }
    swap(arr, start, swapIndex)
    return swapIndex
 }
 function quickSort(arrData, left = 0, right = arrData.length-1) {
     if (left<right) {
        pivotIndex = pivot(arrData, left, right)
        //left
        quickSort(arrData, left, pivotIndex-1)
   
        //right
        quickSort(arrData, pivotIndex+1, right)
     }
     return arrData

 }


console.log( quickSort([5,3,9,-1,-6,25,8,3,96,2,1,10,4]));
