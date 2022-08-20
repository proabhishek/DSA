// Ramesh
// e
function indexOf1(str, ch){
    
    for(i = 0; i<=str.length; i++){
        if(str[i]==ch){
            return i
        }
    }

    return -1
}

function lastIndexOf1(str, ch){
    let t = ch.charCodeAt()
    let ch1 = ""
    if(ch>"A" && ch<"Z"){
         ch1 = String.fromCharCode(t+32)
    }
    else if(ch>"a" && ch<"z"){
        ch1 = String.fromCharCode(t-32)
    }
    
    for(i = str.length-1; i>=0; i--){
        if(str[i]==ch || str[i]==ch1){
            return i
        }
    }

    return -1
}

console.log(lastIndexOf1("rE2ameseEh", "2"))
console.log(lastIndexOf1("ramesh", "f"))