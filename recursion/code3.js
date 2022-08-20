function fun(n) {
    if(n==0){
        return "a"
    }
    console.log(n) 
    fun(n-1)
    console.log(n)
}

fun(3)