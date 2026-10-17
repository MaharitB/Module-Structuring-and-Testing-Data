export function getOrdinalNumber(num) {
  let numStr = num.toString();

  if (numStr.slice(-1) == "1") {
    return `${num}st`;
  }
  return `${num}nd`;
}
