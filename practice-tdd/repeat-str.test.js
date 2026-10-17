// Implement a function repeatStr
import { repeatStr } from "./repeat-str.js";

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});
test("should repeat the string count times", () => {
  const str = "hello";
  const count = 2;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohello");
});
test("should repeat the string count times", () => {
  const str = "hello";
  const count = 4;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohellohello");
});

// Case: handle count of 1:

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hello");
});
// Case: Handle count of 0:

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual(" ");
});
// Case: Handle negative count:

test("should repeat the string count times", () => {
  expect(() => repeatStr("hello", -1)).toThrow("Negative counts are not valid");
});
