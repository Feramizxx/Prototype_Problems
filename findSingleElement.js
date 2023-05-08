const findSingleElement = (nums) => {
  const res = {};

 nums.forEach((element)=>{
  if (res[element]) {
    res[element] += 1;
  } else {
    res[element] = 1;
  }
 
 })

  for (key in res) {
    if (res[key] == 1) {
      return key;
    }
  }
};

const arr = [4, 4, 5, 1, 2, 1, 2];

console.log(findSingleElement(arr));
