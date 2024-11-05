function verify_passworrd(password) {
    // Password must be at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Password must contain at least one number
    if (!/\d/.test(password)) {
        return false;
    }

    

    return true;
}

module.exports = verify_passworrd;