function searchInsert(nums, target) {
  if (nums == null || target == null) {
    return "please enter all Inputs";
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

const arr = [1, 3, 5, 6];
console.log(searchInsert(arr, null));
