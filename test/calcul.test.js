import { test } from "node:test";
import assert from "node:assert/strict";
import { total, remise } from "../src/calcul.js";

test("total d'une liste", () => {
  assert.equal(total([{ prix: 10, quantite: 2 }, { prix: 5, quantite: 1 }]), 25);
});

test("remise de 20 %", () => {
  assert.equal(remise(50, 20), 40);
});
