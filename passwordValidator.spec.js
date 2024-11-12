const passwordValidator = require('./passwordValidator');

test('password length is less than 8 characters', () => {
    const options = { length_limit: 8 };
    const result = passwordValidator('abc', options);
    expect(result).toBe(false); 
});

test('password does not contain a number', () => {
    const options = { min_numbers: 1 };
    const result = passwordValidator('abcdefgh', options);
    expect(result).toBe(false);
});

test('password does not contain a letter', () => {
    const options = { min_letters: 1 };
    const result = passwordValidator('12345678', options);
    expect(result).toBe(false);
});

test('password meets all basic requirements', () => {
    const options = { length_limit: 8, min_letters: 1, min_numbers: 1 };
    const result = passwordValidator('abc12345', options);
    expect(result).toBe(true);
});

test('password fails custom rule for special character', () => {
    const options = {
        custom_rules: [password => /[@$!%*?&]/.test(password)]
    };
    const result = passwordValidator('abc12345', options);
    expect(result).toBe(false);
});

test('password passes custom rule for special character', () => {
    const options = {
        custom_rules: [password => /[@$!%*?&]/.test(password)]
    };
    const result = passwordValidator('abc12345!');
    expect(result).toBe(true);
});
