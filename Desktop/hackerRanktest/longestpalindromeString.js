const longestPalindrome = s => {
    if(!s || s.length <= 1) {
      return s
    }
    let longest = s.substring(0, 1)
    for(let i = 0; i < s.length; i++) {
      let temp = expand(s, i, i)
      if(temp.length > longest.length) {
        longest = temp
      }
      temp = expand(s, i, i + 1)
      if(temp.length > longest.length) {
        longest = temp
      }
    }
    return longest
  }
  
  const expand = (s, begin, end) => {
    while(begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
      begin--
      end++
    }
//     return s.substring(begin + 1, end)
//   }

function longestPalindrome(s) {
    if (s.length < 2) return s; // base case
    
    let maxL = 0; // max left boundary
    let maxR = 0; // max right boundary
    let maxPalindromicLength; // maxR - maxL
    let L = 0; // current left boundary
    let R = 0; // current right boundary
    let maxIndex = s.length - 1;
    let i = 0; // main iterator
    
    while (i < s.length) {
        L = i, R = i; // reset current left & right boundaries
        
        // move right boundary if there are duplicates
       while (R < maxIndex && s[R] === s[R + 1]) {
            R++;
       }
       
       i = R + 1; // set our iterator for the next iteration
       
       // expand left and right boundaries
       while (L > 0 && R < maxIndex && s[L - 1] === s[R + 1]) {
           L--;
           R++;
       }
       
       maxPalindromicLength = maxR - maxL;
       
       // if current palindrome is longer than max palindrome
       if (R - L > maxPalindromicLength) {
           maxL = L, maxR = R;
           
           // if we reached the maximum possible palindromic length, return our string
           if (maxPalindromicLength === maxIndex) {
               return s;
           }
       }
   }
       
   return generateStr(s, maxL, maxR);
}

// generate our palindrome
function generateStr(s, start, end) {
   let str = '';
   
   for (let i = start; i <= end; i++) {
       str += s[i];
   }
   
   return str;
}

  console.log(longestPalindrome("abanab"));
  