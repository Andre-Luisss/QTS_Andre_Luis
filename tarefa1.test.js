import assert from 'node:assert/strict';

let nome = 'Charlie XCX'

Deno.test("Teste do assert doesNotMatch", () => {
    assert.doesNotMatch(nome, /Charlie/);
})

Deno.test("Teste do assert doesNotMatch", () => {
    assert.doesNotMatch(nome, /XCX/);
})

Deno.test("Teste do assert doesNotMatch", () => {
    assert.doesNotMatch(nome, /Ariana/);
})