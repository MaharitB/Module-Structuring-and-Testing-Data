// implement a function countChar that counts the number of times a character occurs in a string
import { countChar } from "./count.js";

// Scenario: Multiple Occurrences

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences

test(" Should count multiple occurences of character", () => {
  const str = "aaaaa";
  const char = "c";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should count multiple occurences of character", () => {
  const str = "acc";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});
test("should count multiple occurences of character", () => {
  const str = "AAAa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});
test("should count multiple occurences of character", () => {
  const str = "11aa";
  const char = "1";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
test("should count multiple occurences of character", () => {
  const str = "£100";
  const char = "£";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});
test("should count multiple occurences of character", () => {
  const str = "let's play tag";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
test("should count multiple occurences of character", () => {
  const str = "let's play tag";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
