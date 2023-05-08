function canBeIncreasing(arr) {
  if (arr == null) return "arr did not find";

  let removals = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      if (++removals > 1) return false;
      if (arr[i] <= arr[i - 2]) arr[i] = arr[i - 1];
    }
  }
  return true;
}

const arr = [1, 5, 9, 10, 7, 11];
console.log(canBeIncreasing(arr));
