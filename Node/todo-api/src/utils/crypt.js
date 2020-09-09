import bcrypt, { compareSync } from 'bcrypt';

/**
 *
 * @param {string} password
 * @returns {boolean}
 */
export function hashPassword(password) {
  return bcrypt.hashSync(password, +process.env.PASSWORD_SALT);
}

/**
 *
 * @param {string} password
 * @param {string} hash
 * @returns {boolean}
 */
export function checkPassword(password, hashedPassword) {
  return compareSync(password, hashedPassword);
}
