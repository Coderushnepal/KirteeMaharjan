const bcrypt = require('bcrypt');

const salt = process.env.PASSWORD_SALT;

/**
 * Hash a password
 *
 * @param {string} password
 * @returns {string}
 */
export function hashPassword(password) {
    console.log('password=', password);
    // console.log('hashed=', bcrypt.hashSync(password, process.env.PASSWORD_SALT));
    return bcrypt.hashSync(password, +salt);
}

/**
 * Conpare password with hashed version
 *
 * @param {string} password
 * @returns {boolean}
 */
export function checkPassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}
