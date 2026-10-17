export function getOrdinalNumber(num) {
  let numStr = num.toString();

  if (numStr.slice(-1) == "1") {
    return `${num}st`;
  }
  if (numStr.slice(-1) == "2") {
    return `${num}nd`;
  }
  if (numStr.slice(-1) == "3") {
    return `${num}rd`;
  }
  return `${num}th`;
}
