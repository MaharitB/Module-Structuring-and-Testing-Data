export function getOrdinalNumber(num) {
  let numStr = num.toString();
  if (num == 0) {
    throw new Error("Invalid Input");
  }

  if (numStr.slice(-1) == "1" && numStr.slice(-2) != 11) {
    return `${num}st`;
  }

  if (numStr.slice(-1) == "2" && numStr.slice(-2) != 12) {
    return `${num}nd`;
  }
  if (numStr.slice(-1) == "3" && numStr.slice(-2) != 13) {
    return `${num}rd`;
  }

  return `${num}th`;
}
