function sortSentence(s) {
  if (s == null) return "text did not find";
  let results = [];

  s.split(" ").forEach((i) => {
    let index = Number(i[i.length - 1]) - 1;
    let str = i
      .split("")
      .slice(0, i.length - 1)
      .join("");
    results[index] = str;
  });

  return results.join(" ");
}
