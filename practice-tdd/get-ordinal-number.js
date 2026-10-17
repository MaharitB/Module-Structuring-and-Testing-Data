export function getOrdinalNumber(num) {
  let numStr = num.toString();
  if (num == 0) {
    throw new Error("Invalid Input");
  }
  if (numStr.slice(-1) == "1" && num != 11) {
    return `${num}st`;
  }
  if (numStr.slice(-1) == "2" && num != 12) {
    return `${num}nd`;
  }
  if (numStr.slice(-1) == "3" && num != 13) {
    return `${num}rd`;
  }
  if (num == 11 || num == 12 || num == 13) {
    return `${num}th`;
  }
  return `${num}th`;
}
