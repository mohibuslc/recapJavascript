// primeNumber Calculation :

function isPrime(n) {
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return " Your That Number not Prime Number ";
    }
  }
  return " That is Prime Number ";
}

var result = isPrime(139);

console.log(result);
