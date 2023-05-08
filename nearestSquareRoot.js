const squareRoot = (num) => {
  for (let i =0; i <= num; i++) {
    if (num!==0 && num**(1/2).toString().split(".")[1]==undefined) {
      return num**(1/2);
    }
    else if(num===0){
        return 0;
    }
    else {
    return (num**(1/2)).toString().split(".")[0]
    }
 
  }
};

const num = 0;

console.log(squareRoot(num))

