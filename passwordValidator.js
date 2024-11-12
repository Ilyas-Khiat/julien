

function verify_passworrd(password,length_limit = 8,) {
    // Password must be at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Password must contain at least one number
    if (!/\d/.test(password)) {
        return false;
    }

    // Password must contain at least one letter
    if (!/[a-zA-Z]/.test(password)) {
        return false;
    }

    return true;
}

module.exports = verify_passworrd;