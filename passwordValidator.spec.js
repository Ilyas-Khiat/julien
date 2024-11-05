const passwordValidator = require('./passwordValidator');

test('password length is less than 8 characters', () => {
    const result = passwordValidator('abc');
    expect(result).toStrictEqual(false);
});

test('password does not contain a number', () => {
    const result = passwordValidator('abcdefgh');
    expect(result).toStrictEqual(false);
});

