var isPalindrome = function(s) {
	if(s.length===0) return true
	let cleanString = s.replace(/[^0-9A-Z]+/gi,"").toLowerCase();
	let length = cleanString.length-1
	let mid = Math.floor(length/2)
	for(let i = 0; i <= mid; i++){
		if(cleanString[i]!=cleanString[length-i]){
			return false
		}
	}
	return true
};