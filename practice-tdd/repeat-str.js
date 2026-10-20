export function repeatStr(str, count) {
  // Your implementation of this function must *not* call String.prototype.repeat
  //  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.

  let repeatedStr = str;
  count = Math.floor(count);

  if (str === " ") {
    throw new Error("String shoild not be empty");
  }
  if (count < 0) {
    throw new Error("Negative counts are not valid");
  }
  if (count == 0) {
    return "";
  }

  for (let i = 1; i < count; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}
