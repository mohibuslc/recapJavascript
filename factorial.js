// factorial calculate while Loop ... inside the function ;

function factorialCal(n) {
 
    var factorialCal = 1 ; 

  for (let i = 1; i <= n; i++) {



    factorialCal= factorialCal * i;

   
  }

  return factorialCal;
}

let factorialResult = factorialCal(10);

console.log(factorialResult);
