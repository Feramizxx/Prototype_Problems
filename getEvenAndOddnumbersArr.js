function numbers(arr) {
  if (arr == null) {
    return "arr could not find";
  }
  const newArr = arr.sort((a, b) => a - b);
  const oddArray = [];
  const evenArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 !== 0) {
      oddArray.push(newArr[i]);
    } else {
      evenArr.push(newArr[i]);
    }
  }

  return [...oddArray, ...evenArr];
}

const arr = [1, 2, 6, 20, 8, 4, 3, 7, 9];

console.log(numbers(arr));
