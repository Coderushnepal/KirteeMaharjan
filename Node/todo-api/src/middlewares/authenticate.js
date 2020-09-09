// middleware to compare recieved token in request header
// to that with token stored in database

// later middleware given by express-jwt for verifying token
// is used instead
// filename: jwtAuthentication.js

import { verifyToken } from '../services/authenticate';

export default async function authenticate(req, res, next) {
  const userId = +req.params.userId;
  const token = req.headers['authorization'];

  try {
    await verifyToken(userId, token);
    next();
  } catch (err) {
    next(err);
  }
}
