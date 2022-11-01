

// function getRecurison(num){
//     var fact = 1 ; 

//     for(var i = 1 ; i<=num ; i++){

//        fact = fact * i ; 

//     }
//     return fact ; 
// }

function fRecursion(num){
    if(num == 1){
       return 1 ; 
    }else{
        return num*fRecursion(num -1) ;
    }
}
var result = fRecursion(5);
console.log(" Result make out From Recursion way = " , result)