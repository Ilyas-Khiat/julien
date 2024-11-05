const passwordValidator = require('./passwordValidator');

test('password length is less than 8 characters', () => {
    const result = passwordValidator('abc');
    expect(result).toStrictEqual({valid: false, reason: "Password is too short"});
});

