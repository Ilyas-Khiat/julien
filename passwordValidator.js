
function verify_password(password, options = {}) {
    const {
        length_limit = 8,
        min_letters = 1,
        min_numbers = 1,
        custom_rules = []
    } = options;

    // Check minimum length
    if (password.length < length_limit) {
        return false;
    }

    // Check minimum number of letters
    const letterCount = (password.match(/[a-zA-Z]/g) || []).length;
    if (letterCount < min_letters) {
        return false;
    }

    // Check minimum number of numbers
    const numberCount = (password.match(/\d/g) || []).length;
    if (numberCount < min_numbers) {
        return false;
    }

    // Check custom rules
    for (const rule of custom_rules) {
        if (typeof rule === 'function' && !rule(password)) {
            return false;
        }
    }

    return true;
}

module.exports = verify_password;
