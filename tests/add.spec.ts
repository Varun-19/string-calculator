import add from "../src/add";

test('Empty string returns 0', () => {
    expect(add('')).toBe(0);
});