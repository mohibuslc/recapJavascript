// var factorial = 1;

// var i = 1;
// while (i <= 5) {
//   factorial = factorial * i;

//   i++;
// }

// console.log(factorial);

// while loop inside the function  ;

function factorial(n) {
  var i = 1;

  var factorial = 1;

  while (i <= n) {
    factorial = factorial * i;

    i++ ; 
  }
  return factorial;
}

var result = factorial(10);

console.log(result)
