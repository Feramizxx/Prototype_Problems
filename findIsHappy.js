
const isHappy = function(n) {

  if(n==null){
    return;
  }
  const numbers = [];

  while (n !== 1 && !numbers.includes(n)) {
    numbers.push(n);
    n = sumOfSquares(n); 
  }
  return n === 1;
};

function sumOfSquares(n) {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  
  return sum;
}



console.log(isHappy(9))
