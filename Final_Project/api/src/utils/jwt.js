import jwt from 'jsonwebtoken';

/**
 * Generate a json web token
 * @param {object} user
 */
export function generateToken(user) {
  return jwt.sign(user, process.env.TOKEN_SECRET, {
    algorithm: 'HS256'
  });
}

/**
 * Decode token without verifying signature
 * @param {string} token
 */
export function decodeToken(token) {
  return jwt.decode(token);
}
