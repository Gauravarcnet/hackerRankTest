/**
 * time complexity is O(n log n)
 * its combinaiton of merge and sort
 * exploits the fact that arryas 0 and 1element are alwasy sorted
 * works by decomposing arrays into smaller arrays of 0 and 1 elements, then building up 
 * newly sorted array
 *  */ 
/**
 * best time complexity is O(n log n)
 * avarage ,worst O(n log n)
 * space O(n)
 * @param {*} arr1 
 * @param {*} arr2 
 */


function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
 function MergeSort(array){
    if(array.length <= 1){
        return array
    }
    let mid = Math.floor(array.length/2),
        left = MergeSort(array.slice(0,mid)),
        right = MergeSort(array.slice(mid))
    return merge(left,right)
 }

console.log( MergeSort([1,2,9,3,7,25,8,2,615,2]));
