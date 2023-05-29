// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2 
test('phone number format', () => {
    expect(functions.isPhoneNumber('111-121-2321')).toBe(true);
    expect(functions.isPhoneNumber('(999)666-3331')).toBe(true);
    expect(functions.isPhoneNumber('0')).toBe(false);
    expect(functions.isPhoneNumber('true')).toBe(false);
});

test('email format', () => {
    expect(functions.isEmail('sunshine@gmail.com')).toBe(true);
    expect(functions.isEmail('rainshine@hotmail.com')).toBe(true);
    expect(functions.isEmail('12')).toBe(false);
    expect(functions.isEmail('boo')).toBe(false);
});

test('password strength', () => {
    expect(functions.isStrongPassword('cyfds7d4cd')).toBe(true);
    expect(functions.isStrongPassword('aa1a1a1aa1')).toBe(true);
    expect(functions.isStrongPassword('a')).toBe(false);
    expect(functions.isStrongPassword('0')).toBe(false);
});

test('date format', () => {
    expect(functions.isDate('01/01/2000')).toBe(true);
    expect(functions.isDate('05/28/2023')).toBe(true);
    expect(functions.isDate('datedatedare')).toBe(false);
    expect(functions.isDate('1242343i304348932482843')).toBe(false);
});

test('hex color', () => {
    expect(functions.isHexColor('#00ff00')).toBe(true);
    expect(functions.isHexColor('#123abc')).toBe(true);
    expect(functions.isHexColor('notahex')).toBe(false);
    expect(functions.isHexColor('#isahex')).toBe(false);
});