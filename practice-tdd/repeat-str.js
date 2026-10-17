export function repeatStr(str, count) {
  let repeatedStr = str;
  if (count < 0) {
    throw new Error("Negative counts are not valid");
  }
  if (count == 0) {
    return " ";
  }
  for (let i = 1; i < count; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}
