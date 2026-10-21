import { getCardValue } from "../implement/3-get-card-value.js";

test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});
test(`should retun the numeric value when given "numbered" cards`, () => {
  expect(getCardValue("2♣")).toEqual(2);
  expect(getCardValue("6♥")).toEqual(6);
  expect(getCardValue("10♦")).toEqual(10);
});
test(`should retun 10 when given(J,Q,K)cards`, () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});
test(`throws for invalid cards`, () => {
  expect(() => {
    getCardValue("invalid");
  }).toThrow(`Expected a number followed by a suit, but got "invalid"`);
});
test(`throws for invalid rank`, () => {
  expect(() => {
    getCardValue("1♥");
  }).toThrow(`Expected a valid Rank instead got "1♥"`);
});
test(`throws for invalid suit`, () => {
  expect(() => {
    getCardValue("AS");
  }).toThrow(`Expected a valid Suit instead got "AS"`);
});
test(`throws for invalid input`, () => {
  expect(() => {
    getCardValue("100");
  }).toThrow(`Expected a valid Suit instead got "100"`);
});
test(`throws for invalid rank`, () => {
  expect(() => {
    getCardValue("15♥");
  }).toThrow(`Expected a valid Rank instead got "15♥"`);
});
test(`throws for invalid input`, () => {
  expect(() => {
    getCardValue(" ");
  }).toThrow(`Expected a valid Rank and Suit instaed got " "`);
});
test(`throws for invalid input with space ending`, () => {
  expect(() => {
    getCardValue("4♣ ");
  }).toThrow(`Expected a valid Rank and Suit instaed got "4♣ "`);
});
test(`throws for invalid input`, () => {
  expect(() => {
    getCardValue("♣4");
  }).toThrow(`Expected a valid Rank and Suit instaed got "♣4"`);
});
test(`throws for invalid input`, () => {
  expect(() => {
    getCardValue("");
  }).toThrow(`Expected a valid Rank and Suit instaed got ""`);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
