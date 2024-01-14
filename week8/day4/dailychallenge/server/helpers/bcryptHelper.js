// functions for hashing and comparing pwds, using bcrypt
// importing hashing
const bcrypt = require('bcrypt'); 

const saltRounds = 10; // complexity of hash alg

class BcryptHelper {
    async hashPassword(password) {  // hashing
        return bcrypt.hash(password, saltRounds);
    }

    async comparePasswords(plainPassword, hashedPassword) {   // comparison
        return bcrypt.compare(plainPassword, hashedPassword);
    }
}

// export
module.exports = new BcryptHelper();