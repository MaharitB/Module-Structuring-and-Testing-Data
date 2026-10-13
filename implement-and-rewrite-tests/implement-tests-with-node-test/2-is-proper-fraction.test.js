import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});
test("Basic proper function", () => {
  assert.equal(isProperFraction(2, 4), true);
});
test("Not prpoer function", () => {
  assert.equal(isProperFraction(4, 1), false);
});
test("Not proper function", () => {
  assert.equal(isProperFraction(1, 1), false);
});
test("Basic proper function", () => {
  assert.equal(isProperFraction(-1, 2), true);
});

test("Basic proper function", () => {
  assert.equal(isProperFraction(1, -2), true);
});
test("Not proper function", () => {
  assert.equal(isProperFraction(1, 0), false);
});
test("Not proper function", () => {
  assert.equal(isProperFraction(0, 1), false);
});
test("Not proper function", () => {
  assert.equal(isProperFraction(0, 0), false);
});
