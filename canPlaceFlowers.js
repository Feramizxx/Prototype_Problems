function canPlaceFlowers(arr, n) {
  if (arr == null || n == null) return "please enter all inputs";

  for (let i = 0; i < arr.length; i++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) continue;
      if (arr[Math.max(0, i - 1)]) continue;
      if (arr[Math.min(arr.length - 1, i + 1)]) continue;
      arr[i++] = 1;
    }
    return n < 1;
  }
}

const arr = [1, 0, 0, 0, 1];
console.log(canPlaceFlowers(arr));
