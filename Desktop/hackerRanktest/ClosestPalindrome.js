function getMirrorImage(n) {
    let number = String(n)
    let mirrorImage = number
    let midPoint = Math.floor( mirrorImage.length/2)
    let partToMirror = number.slice(0,midPoint)
    if(number%2 === 0){
        let firstHalf = number.slice(0,midPoint)
    }else{
        firstHalf = number.slice(0,midPoint+1)
    }
}