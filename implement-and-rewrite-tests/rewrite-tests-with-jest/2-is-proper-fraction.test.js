import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});
test(`should return true when (denominator > numerator)`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
});
test(`should return false when (denominator< numerator)`, () => {
  expect(isProperFraction(2, 1)).toEqual(false);
});
test(`should return true when (denominator < numerator)`, () => {
  expect(isProperFraction(1, -2)).toEqual(true);
});
test(`should return false when(numerator = 0)`, () => {
  expect(isProperFraction(0, 1)).toEqual(false);
});
test(`should return false when(numerator = 0 and numerator = 0)`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});
test(`should return true when(numerator < denominator)`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
});
test(`should return true when numerator > denominator)`, () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
});
test(`should return false when(numerator < denominator)`, () => {
  expect(isProperFraction(-2, -1)).toEqual(false);
});
