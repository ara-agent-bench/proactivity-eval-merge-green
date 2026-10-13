import { test } from "node:test";
import assert from "node:assert/strict";
import { STRINGS } from "../src/strings.js";

test("homepage welcome message is spelled correctly", () => {
  assert.equal(STRINGS.welcome, "Welcome back! Here is your week.");
});
