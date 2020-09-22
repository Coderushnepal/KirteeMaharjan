import expressJwt from 'express-jwt';

export const authenticate = expressJwt({
  // secret: process.env.TOKEN_SECRET,
  secret: 'AC3312zx0IM90#N%',
  algorithms: ['HS256']
});

export default authenticate;
