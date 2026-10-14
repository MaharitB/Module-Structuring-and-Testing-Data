import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
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
    /Expected a valid Rank and suit instead got "11♠"/,
    "Expected clear error"
  );
});
test("throws for invalid suit", () => {
  assert.throws(
    () => getCardValue("AA"),
    /Expected a valid Rank and suit instead got "AA"/,
    "Expected clear error"
  );
});
test("throws for invalid rank", () => {
  assert.throws(
    () => getCardValue("1♣"),
    /Expected a valid Rank and suit instead got "1♣"/,
    "Expected clear error"
  );
});
