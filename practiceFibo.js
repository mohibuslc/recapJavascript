

// function getFibo(num){
//  var fact = 1 

//  for( var i = 1 ; i<=num; i++ ){

//     fact = fact * i ; 



//  } return fact ; 

    
// }

// var result = getFibo(5); 

// console.log(result);


// Recurtion Way make out Fibonacci ; 

// function getRecurtion(num){


//     if(num == 1){

//         return 1 ; 
//     } else {

//         return num*getRecurtion(num-1);

//     }
// }

// var result = getRecurtion(5);

// console.log(result);

// Find out which number are bigger in this Array ; ?.



 


// function maxNumber(){


//     var max = number[0];


//     for( var i=0 ; i<number.length ; i ++ ){

//     var element = number[i];

//     if(element > max ){

//         max = element ; 
//     }

//     } return max ; 
// }
// var number = [22, 44, 55, 66, 33, 22, 33, 78, ];

// var result = maxNumber(number); 

// console.log("Max value in the Array =" , result);


var object = {


    name : ' Kamla',
    phone: '01717191467 ',
    Address : ' Tillaghohore '

}

var looking = 'phone' ; 

var info = object[looking]

object[looking]= '+351-920051573';

console.log(object);
