function verify_passworrd(password) {
    if (password.length < 8) {
        return {valid: false, reason: "Password is too short"};
    }

    return {valid: true};
}

module.exports = verify_passworrd;