// /**
//  * radix sort does not compare 
//  * is a special sorting algorithm that works on lists of numbers
// * time complexity 0(nk) in every case, space complexity is o(n+k)
//  * it never makes comparision btw elements 
//  */

//  function   getDigit(num, i) {
//      let digit = Math.floor(Math.abs(num)/Math.pow(num,i))%10
//      return digit
//  }

//  function digitCount(num) {
//      if(num === 0) return num
//      return Math.floor(Math.log10(Math.abs(num))) + 1 // or we can convert number into string then count length of string and return
//  }

//  function mostDigits(nums) {
//      let maxDigits = 0
//      for (let i = 0; i < nums.length; i++) {
//          maxDigits = Math.max(maxDigits,nums[i])
//      }
//      return maxDigits
//  }

//  function radixSort(numArray) {
//      let mostDigit = mostDigits(numArray)
//      let digitCnt = digitCount(mostDigit)
//      console.log(mostDigit,digitCnt);
     
//      for (let i = 0; i < digitCnt; i++) {
//         let digitBuckets = Array.from({length: 10}, ()=> [])
//         for (let j = 0; j < numArray.length; j++) {
//             digitBuckets[getDigit(numArray[j], i)].push(numArray[j])
//         }
//         numArray = [].concat(...digitBuckets)
//         console.log(numArray);

        
//      }
//     //  console.log(numArray);


//  }
//  radixSort([23,345,5467,12,2345,9852])

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  function radixSort(nums){
      let maxDigitCount = mostDigits(nums);
      for(let k = 0; k < maxDigitCount; k++){
          let digitBuckets = Array.from({length: 10}, () => []);
          for(let i = 0; i < nums.length; i++){
              let digit = getDigit(nums[i],k);
              digitBuckets[digit].push(nums[i]);
          }
          nums = [].concat(...digitBuckets);
      }
      return nums;
  }
  
console.log(  radixSort([23,345,5467,12,2345,9852])
);
  
  
  
  
  
  
  
  