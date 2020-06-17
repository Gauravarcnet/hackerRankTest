//time complexity is O(N^2) for every case
// its good over bubble sort when we don't want too much too write swap in mmeory

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
            
        }
        if (i !== lowest) swap(arr,i,lowest)
    }
    return arr
}



function swap(arr,item1,item2) {
    [arr[item1], arr[item2]] = [arr[item2], arr[item1]]
    return arr
}

console.log(selectionSort([1,25,6,7,12,8,5,67]));

