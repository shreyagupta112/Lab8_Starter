// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - part 2 
/* function one - phoneNumber */ 
test('phone number is correct', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
}); 

test('phone number test is correct', () => {
    expect(functions.isPhoneNumber('987-654-3210')).toBe(true);
});  

test('phone number test is incorrect', () => {
    expect(functions.isPhoneNumber('12234')).toBe(false);
}); 

test('phone number test is incorrect', () => {
    expect(functions.isPhoneNumber('123-23-1')).toBe(false);
}); 

/* function two - email */ 
test('email test is correct', () => {
    expect(functions.isEmail('cse@ucsd.edu')).toBe(true);
}); 

test('email test is correct', () => {
    expect(functions.isEmail('helena@gmail.com')).toBe(true);
});  

test('email test is incorrect', () => {
    expect(functions.isEmail('@imcool')).toBe(false);
}); 

test('email test is incorrect', () => {
    expect(functions.isEmail('helloimnotanemail')).toBe(false);
}); 

/* function three - strong password 8? */ 
test('strong password test is correct', () => {
    expect(functions.isStrongPassword('HeLEnALAB')).toBe(true);
});   

test('strong password test is correct', () => {
    expect(functions.isStrongPassword('paSSword110')).toBe(true);
}); 

test('strong password test is incorrect', () => {
    expect(functions.isStrongPassword('hi')).toBe(false);
}); 

test('strong password test is incorrect', () => {
    expect(functions.isStrongPassword('bad')).toBe(false);
});

/* function four - date */ 
test('date test is correct', () => {
    expect(functions.isDate('10/30/2002')).toBe(true);
});  

test('date test is correct', () => {
    expect(functions.isDate('10/20/2002')).toBe(true);
});   

test('date test is incorrect', () => {
    expect(functions.isDate('1 / 2 / 3')).toBe(false);
});   

test('date test is incorrect', () => {
    expect(functions.isDate('2 / 3333 / 0')).toBe(false);
});  

/* function five - hex color */ 
test('hex color test is correct', () => {
    expect(functions.isHexColor('024')).toBe(true);
});   

test('hex color test is correct', () => {
    expect(functions.isHexColor('#224')).toBe(true);
});   

test('hex color test is incorrect', () => {
    expect(functions.isHexColor('#')).toBe(false);
});   

test('hex color test is incorrect', () => {
    expect(functions.isHexColor('##')).toBe(false);
});  