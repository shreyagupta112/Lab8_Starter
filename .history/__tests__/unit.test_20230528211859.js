// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2 
test('phone number format', () => {
    expect(functions.isPhoneNumber('111-121-2321')).toBe(true);
    expect(functions.isPhoneNumber('(559)253-1865')).toBe(true);
    expect(functions.isPhoneNumber('0')).toBe(false);
    expect(functions.isPhoneNumber('true')).toBe(false);
});

test('Email formate', () => {
    expect(functions.isEmail('sunshine@gmail.com')).toBe(true);
    expect(functions.isEmail('rainshine@hotmail.com')).toBe(true);
    expect(functions.isEmail('12')).toBe(false);
    expect(functions.isEmail('boo')).toBe(false);
});

test('Password Strength', () => {
    expect(functions.isStrongPassword('cy7d4!')).toBe(true);
    expect(functions.isStrongPassword('aa1a1a1aa1')).toBe(true);
    expect(functions.isStrongPassword('a')).toBe(false);
    expect(functions.isStrongPassword('0')).toBe(false);
});

test('Date Validity', () => {
    expect(functions.isDate('05/12/2003')).toBe(true);
    expect(functions.isDate('06/02/2000')).toBe(true);
    expect(functions.isDate('NO')).toBe(false);
    expect(functions.isDate('Juneteenth')).toBe(false);
});

test('Hex Validity', () => {
    expect(functions.isHexColor('#ffffff')).toBe(true);
    expect(functions.isHexColor('#f1f11f')).toBe(true);
    expect(functions.isHexColor('BLACK')).toBe(false);
    expect(functions.isHexColor('#')).toBe(false);
});