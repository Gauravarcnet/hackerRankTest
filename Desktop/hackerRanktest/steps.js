// time complexity is O(N^2) ans space complexity is )(N)
function steps(n) {

    for (let i = 1; i <= n; i++) {
        let step = ''

        // for (let j = i; j > 0; j--) {
        //     step += '#'
        // }      

        // for (let space = n-i; space > 0; space--) {
        //     step += " "
            
        // }   
        step += '#'.repeat(i)
        step += ' '.repeat(n-i)

        console.log(step);

       
        
    }
}

steps(5);
