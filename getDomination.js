function getDenominations(amount, r) {
  const result = [];

  if (amount == null) {
    return;
  } else if (r.length === 0) {
    return "there is no money in atm";
  }

  for (const a of r) {
    while (amount >= a) {
      result.push(a);
      amount -= a;
    }
  }
  return result;
}
const r = [500, 200, 100, 50, 20, 10, 5];
const amount = 456;
console.log(getDenominations(amount, r));
