
//time complexity O (N)
function linearSearch(arr, value){
    // add whatever parameters you deem necessary - good luck!
      let v = -1

     for (let i = 0; i < arr.length; i++) {
        if(value === arr[i]){
            return i
        }         
     }
      return v
  }
  
console.log(  linearSearch([10, 15, 20, 25, 30], 15));
