function dupliacteCharacter(str) {
    str = str.trim()
    let lookup = {},
        arr = {}
    for (let i = 0; i < str.length; i++) {
        if (!lookup[str[i]]) {
            lookup[str[i]] = 1
        }
        else{
            if(!arr[str[i]]){
                arr[str[i]] = 1   
            }
        }
    }
    return `Repeating characters ${Object.keys(arr).join("")}`
}

console.log(dupliacteCharacter("javava!!"));
