import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});
test("Classifies obtuse angles", () => {
  const obtuse = getAngleType(91);
  assert.equal(obtuse, "Obtuse angle");
});
test("Classifies acute angle", () => {
  const acute = getAngleType(75);
  assert.equal(acute, "Acute angle");
});
test("Classifies straight angle", () => {
  const straight = getAngleType(180);
  assert.equal(straight, "Straight angle");
});
test("Classifies reflex angle", () => {
  const reflex = getAngleType(270);
  assert.equal(reflex, "Reflex angle");
});
test("Classifiesreflex angle", () => {
  const invalid = getAngleType(0);
  assert.equal(invalid, "Invalid angle");
});
test("Classifiesreflex angle", () => {
  const invalid = getAngleType(-90);
  assert.equal(invalid, "Invalid angle");
});
test("Classifiesreflex angle", () => {
  const invalid = getAngleType(360);
  assert.equal(invalid, "Invalid angle");
});
