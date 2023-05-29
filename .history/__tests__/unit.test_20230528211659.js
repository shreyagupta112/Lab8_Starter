// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2 
test('Phone Number Validity', () => {
    expect(functions.isPhoneNumber('111-121-2321')).toBe(true);
    expect(functions.isPhoneNumber('(559)253-1865')).toBe(true);
    expect(functions.isPhoneNumber('0')).toBe(false);
    expect(functions.isPhoneNumber('true')).toBe(false);
});