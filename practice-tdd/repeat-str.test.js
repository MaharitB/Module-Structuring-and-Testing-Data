// Implement a function repeatStr
import { repeatStr } from "./repeat-str.js";
// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions:
// Given a target string `str` and a positive integer `count` greater than 1,
// When the repeatStr function is called with these inputs,
// Then it should return a string that contains the original `str` repeated `count` times.

// Case: handle count of 1, 2, 3, 4:
test("should repeat the string 1 times", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hello");
});
test("should repeat the string 2 times", () => {
  const str = "hello";
  const count = 2;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohello");
});
test("should repeat the string 3 times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});
test("should repeat the string 4 times", () => {
  const str = "hello";
  const count = 4;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohellohello");
});
// Case: Handle count of 0:
test("should repeat the string 0 times", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});
//case: Handle decimal count:
test("should repeat the stringthe whole number in the count times", () => {
  const str = "hello";
  const count = 2.5;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohello");
});
// Case: Handle negative count:
// Given a target string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error, as negative counts are not valid
test("should throw an error when -1 count is given", () => {
  expect(() => repeatStr("hello", -1)).toThrow("Negative counts are not valid");
});
test(`should throw an error when string is empty`, () => {
  expect(() => repeatStr(" ", 1)).toThrow("String shoild not be empty");
});
