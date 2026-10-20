import { getOrdinalNumber } from "./get-ordinal-number.js";

// Case 1: Numbers ending with 1 (but not 11).
test("should append 'st' for numbers ending with 1, except those ending with 11", () => {
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(21)).toEqual("21st");
  expect(getOrdinalNumber(131)).toEqual("131st");
});
// Case 2: Numbers ending with 2(but not 12).
test("should append 'nd' for numbers ending with 2, except those ending with 12", () => {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(22)).toEqual("22nd");
  expect(getOrdinalNumber(132)).toEqual("132nd");
});
//Case 3: Number ending with 3(but not 13)
test("should append 'rd' for numbers ending with 3, except those ending with 13", () => {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(23)).toEqual("23rd");
  expect(getOrdinalNumber(103)).toEqual("103rd");
  expect(getOrdinalNumber(133)).toEqual("133rd");
});
//case 4 : Number ending 4,5,6,7,8,9 and 0.
test("should append 'th' for numbers ending with (4,5,6,7,8,9,0)", () => {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(10)).toEqual("10th");
  expect(getOrdinalNumber(15)).toEqual("15th");
  expect(getOrdinalNumber(58)).toEqual("58th");
  expect(getOrdinalNumber(100)).toEqual("100th");
});
//Case 5: the exception numbers left out in all the cases(11,12,13)
test("should append 'th' for numbers 11, 12, 13", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(111)).toEqual("111th");
  expect(getOrdinalNumber(112)).toEqual("112th");
  expect(getOrdinalNumber(113)).toEqual("113th");
});

//case 6 now we have come to the last one 0
test(` should throw an error when num is 0`, () => {
  expect(() => getOrdinalNumber(0)).toThrow(`Invalid Input`);
});

//case 7 how about when empty string is the argument
test(`Should throw an error when num is empty string`, () => {
  expect(() => getOrdinalNumber(" ")).toThrow(`Invalid Input`);
});
