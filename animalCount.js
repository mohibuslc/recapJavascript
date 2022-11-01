// Normal Way  Solve the Problem :.

// .......................................................................

// var depth = 22 ;

// var animal = 0 ;

// if (depth <= 10 ){

//     var animal = depth*50 ;
// }else if ( depth<=20 ){

//     var firstpart = 10 * 50;
//     var reminig = depth - 10 ;

//     var secondPart = reminig * 100 ;

//     animal = firstpart + secondPart ;

// }else {

//     var firstpart = 10* 50 ;
//     var secondPart = 10*100;
//     var reminig = depth - 20 ;

//     var thiredPart = reminig*300 ;

//     animal = firstpart + secondPart + thiredPart ;

// }

// console.log(" Total Animal in Jungle = " , animal);

function animalCount(depth) {
  animal = 0;

  if(depth <= 10) {
    animal = depth * 50;
  } else if (depth <= 20) {
    var firstpart = 10 * 50;

    var reminig = depth - 10;

    var secondPart = reminig * 100;

    animal = firstpart + secondPart;
  } else {
    var firstpart = 10 * 50;

    var secondPart = 10 * 100;

    var reminig = depth - 20;

    var thiredPart = depth * 300;

    animal = firstpart + secondPart + thiredPart;
  }
    return animal ; 


}

var result = animalCount(10); 

console.log(result); 


