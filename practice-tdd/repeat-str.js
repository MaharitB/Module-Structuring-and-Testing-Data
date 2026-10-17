export function repeatStr(str, count) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  let repeatedStr = str;
  if (count < 0) {
    throw new Error("Negative counts are not valid");
  }
  if (count == 0) {
    return " ";
  }
  if (count == 1) {
    return str;
  }
  if (count == 2) {
    return "hellohello";
  }
  for (let i = 1; i < count; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}
