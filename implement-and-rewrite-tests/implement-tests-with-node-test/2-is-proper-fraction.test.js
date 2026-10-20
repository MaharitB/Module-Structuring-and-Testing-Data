import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});
test("checking when numerator < denominators", () => {
  assert.equal(isProperFraction(2, 4), true);
});
test("checking when Numerator > denominator", () => {
  assert.equal(isProperFraction(4, 1), false);
  assert.equal(isProperFraction(5, 2), false);
});
test("checking when numerator = denominator ", () => {
  assert.equal(isProperFraction(1, 1), false);
  assert.equal(isProperFraction(2, 2), false);
});
test("Checking when numerator is negative number", () => {
  assert.equal(isProperFraction(-1, 2), true);
  assert.equal(isProperFraction(-4, -6), true);
});
test("checking when denominator is negtive number", () => {
  assert.equal(isProperFraction(1, -2), true);
  assert.equal(isProperFraction(2, -8), true);
});
test("checking when denominator = 0", () => {
  assert.equal(isProperFraction(1, 0), false);
  assert.equal(isProperFraction(5, 0), false);
});
test("Checking when numerator = 0", () => {
  assert.equal(isProperFraction(0, 1), true);
  assert.equal(isProperFraction(0, 5), true);
});
test("checking when numerator= 0 = denominator", () => {
  assert.equal(isProperFraction(0, 0), false);
});
