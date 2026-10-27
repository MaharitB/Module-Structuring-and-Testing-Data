// implement a function countChar that counts the number of times a character occurs in a string
import { countChar } from "./count.js";

// Scenario: Multiple Occurrences

test("should count multiple occurrences of a character 'a' ", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences

test("Should count 0 when the char has no matching character in the string str", () => {
  const str = "aaaaa";
  const char = "c";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should count a character with strings of different characters", () => {
  const str = "acc";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});
test("should count a character with strings of different characters that includes uppercase", () => {
  const str = "AAAa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});
test("should count multiple occurences of character when given with numbers", () => {
  const str = "11aa";
  const char = "1";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
test("should count multiple occurences of character with signs", () => {
  const str = "£100";
  const char = "£";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});
test("should count multiple occurences of space character in a sentece", () => {
  const str = "let's play tag";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
test("should count multiple occurences of character in a sentence", () => {
  const str = "let's play tag";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
test("should count 0 character in an empty string", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
test("should count occurence of space character ", () => {
  const str = " ";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});
test("should throw an error when findCharacter receives more than one character", () => {
  expect(() => {
    countChar("aaaaaaanaaa", "an");
  }).toThrow(`Invalid Input,only character is allowed`);
});
