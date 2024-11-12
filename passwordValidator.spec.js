const passwordValidator = require('./passwordValidator');

test('password length is less than 8 characters', () => {
    const result = passwordValidator('abc');
    expect(result).toBe(false); 
});

test('password does not contain a number', () => {
    const result = passwordValidator('abcdefgh');
    expect(result).toBe(false);
});

test('password does not contain a letter', () => {
    const result = passwordValidator('12345678');
    expect(result).toBe(false);
});
