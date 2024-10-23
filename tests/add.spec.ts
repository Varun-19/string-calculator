import add from "../src/add";

test('Empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('return the same value if only one value is present in string', () => {
    expect(add('2')).toBe(2);
});

test('add the given string separated by comma', () => {
    expect(add('1,2,3')).toBe(6);
});

test('add the given string separated by comma and by newline', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('support a different delimeter given in the beginning of the string', () => {
    expect(add('//[;]\n1;2')).toBe(3);
});

test('support a different + multiple delimeter given in the beginning of the string', () => {
    expect(add('//[;][%]\n1;2%3')).toBe(6);
});

test('support a different + multiple delimeter given in the beginning of the string', () => {
    expect(() => add('//[;][%]\n1;2%-3')).toThrow("Negative Numbers are not allowed");
});