

function number1(n){
    
    if(typeof(n)=="number"){
        return n;
    }
    else if(typeof(n)=="string"){
         
        str = "0123456789."
        for(let i=0;i<n.length;i++){
            if(str.indexOf(n[i])==-1){
                return NaN
            }
        }
        
        // "12.2"

        let num = 0, flag = 0, c = 0
        for(let i=0;i<n.length;i++){
            if(n[i]=="."){
                flag = 1
                continue
            }
            let x = n.charCodeAt(i) // 49
            if (flag == 0){
              num = num*10 + x-48
            }
            else{
                c++
               num = num + (x-48)/10**c  
            }
        }
        return num
    }
    
}


console.log(number1(12))
console.log(number1(12.2))
console.log(number1("12"))
console.log(number1("12.2"))
console.log(number1("abc"))
console.log(number1("12p"))
console.log(number1("12.2p"))




