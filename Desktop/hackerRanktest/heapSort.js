
function heapSort(arr){
    let length = arr.length,
         i = Math.floor(length/2-1)
         k = length - 1
         while(i >= 0){
             heapify(arr, length, i)
             i--
         }
         while(k >= 0){
             [arr[0], arr[k]] = [arr[k], arr[0]] 
             heapify(arr, k, 0)
             k--
         }
         return arr
}
function heapify(arr,length,i) {
    let largest = i,
        left = i*2+1,
        right = left+1

        if(left < length && arr[left] > arr[largest]){
            largest = left
        }
        if(right < length && arr[right] > arr[largest]){
            largest = right
        }
        if(largest !== i){
            [arr[i], arr[largest]] = [arr[largest], arr[i]] 
            heapify(arr, length, largest)
        }
        return arr
}

console.log(heapSort(([1,5,3,7,92,75])));
