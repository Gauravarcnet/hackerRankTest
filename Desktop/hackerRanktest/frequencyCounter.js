function sameFrequency(array1, array2){
    // good luck. Add any arguments you deem necessary.
    let frequency1 = {}
        frequency2 = {}
        if(array1.length !== array2.length) return false;

        console.log(array1)
    for(let i = 0; i < array1.length; i++){
        frequency1[array1[i]] = ++frequency1[array1[i]] || 1
    }
    
    for(let i = 0; i < array2.length; i++){
        frequency2[array2[i]] = ++frequency2[array2[i]] || 1
    }
    
    console.log(JSON.stringify(frequency1),JSON.stringify(frequency2))
    
    for(let key in frequency1){
        
        if(frequency2[key] !== frequency1[key]){
            return false
        }
        return true
    }
      
  }
  
  console.log(sameFrequency("124","1248"))
  