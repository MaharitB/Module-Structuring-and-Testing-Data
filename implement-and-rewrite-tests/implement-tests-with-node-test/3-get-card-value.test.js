import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
  assert.equal(getCardValue("2♥"), 2);
  assert.equal(getCardValue("5♣"), 5);
});
test("returns 11 for ace cards", () => {
  assert.equal(getCardValue("A♠"), 11);
  assert.equal(getCardValue("A♥"), 11);
});
test("returns 10 for cards with", () => {
  assert.equal(getCardValue("J♠"), 10);
  assert.equal(getCardValue("Q♥"), 10);
  assert.equal(getCardValue("K♣"), 10);
});
test("returns 10 for cards with", () => {
  assert.equal(getCardValue("10♣"), 10);
});

test("throws for invalid rank or suit", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});
test("throws for invalid rank", () => {
  assert.throws(
    () => getCardValue("11♠"),
    /Expected a valid Rank instead got "11♠"/,
    "Expected clear error"
  );
});
test("throws for invalid suit when A is given as suit", () => {
  assert.throws(
    () => getCardValue("AA"),
    /Expected a valid Suit instead got "AA"/,
    "Expected clear error"
  );
});
test("throws for invalid rank when 1 is given as Rank", () => {
  assert.throws(
    () => getCardValue("1♣"),
    /Expected a valid Rank instead got "1♣"/,
    "Expected clear error"
  );
});
test("throws invalid suit when 0 is given as suit", () => {
  assert.throws(
    () => getCardValue("100"),
    /Expected a valid Suit instead got "100"/,
    "Expected clear error"
  );
});
test("throws invalid input when empty space is given", () => {
  assert.throws(
    () => getCardValue(" "),
    /Expected a valid Rank and Suit instead got " "/,
    "Expected clear error"
  );
});
test("throws invalid Rank when given empty space before the card", () => {
  assert.throws(
    () => getCardValue(" 10♠"),
    /Expected a valid Rank instead got " 10♠"/,
    "Expected clear error"
  );
});
test("throws invalid input when given null as input", () => {
  assert.throws(
    () => getCardValue(null),
    /Expected a valid Rank and Suit instead got null/,
    "Expected clear error"
  );
});
