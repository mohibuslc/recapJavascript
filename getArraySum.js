// var sum = 0 ;

// // for( var i = 0 ; i<Array.length ; i++){

// //     var element = Array[i]

// //     sum = sum+element ;
// // }

// console.log(sum);

function getSum(Array) {
  var sum = 0;
  for (var i = 0; i < Array.length; i++) {
    var element = Array[i];
    sum = sum + element;
  }

  return sum;
}
var Array = [22, 33, 56, 509, 22, 190, 354];

var result = getSum(Array);

console.log(" Here is Total Array element sum : ...", result);
