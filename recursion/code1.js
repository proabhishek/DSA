
function code1(n) {
    if(n==0){
        return
    }
    console.log(n)
    code1(n-1)
}


code1(0)