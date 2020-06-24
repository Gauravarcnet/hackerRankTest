
///time complexity id O(N^2) or if array is a;most sprted than 0(N)
// function bubbleSorting(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if(array[j] > array[j+1]){
//                 swap(array,j,j+1)
//             }           
//         }
//     }
//     return array
// }

/**
 * 
 * @param {if array is nearly then time complexity is linear n otherwise n^2} array 
 */
// function bubbleSorting(array) {  // this method is good for nearly(almost) sorted array but it can save alot of time
//     let noSwaps
//     for (let i = array.length; i > 0 ; i--) {
//         noSwaps = true
//         for (let j = 0; j < i-1; j++) {
//             if(array[j] > array[j+1]){
//                 swap(array,j,j+1)
//                 noSwaps = false
//             }           
//         }
//         if(noSwaps) break
//     }
//     return array
// }
//     function swap(arr,i,j) {
//         // let temp = arr[i]        // old way
//         //     arr[i] = arr[j]
//         //     arr[j] = temp
//             [arr[i], arr[j]] = [arr[j], arr[i]] // es15 way of swapping
//         // return arr
//     }



function bubbleSorting1(arr){
    let noSwaps
    function swap (array,index1, index2){
        [array[index1],array[index2]] = [array[index2],array[index1]]
        return array
    }
    for(let i = arr.length; i > 0 ;i--){
        noSwaps = true
         for (let j = 0; j < i-1; j++) {
             if(arr[j] > arr[j+1]){
                 swap(arr,j,j+1)
                 noSwaps =false
             }
         }
         if(noSwaps) break
    }
    return arr
}
console.log(bubbleSorting1([1,5,67,36,5,10]));

