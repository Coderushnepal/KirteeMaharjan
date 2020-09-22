import logger from '../utils/logger';
import { generateToken } from '../utils/jwt';
import BadRequestError from '../utils/BadRequestError';
import { getByEmail, CreateUser, remove } from '../models/Users';
import { hashPassword, checkPassword } from '../utils/crypt';

/**
 * Create a user
 *
 * @param {*} payload
 */
export async function createUser(payload) {
  const { email, password } = payload;

  logger.info(`Checking if user already exists`);
  const result = await getByEmail(email);

  if (result) {
    logger.info(`User already exists`);
    throw new BadRequestError(`User already exists`);
  }

  const hashedPassword = hashPassword(password);

  logger.info(`Creating user...`);
  const data = await CreateUser({ ...payload, password: hashedPassword });

  return {
    data: {
      ...data,
      password: undefined,
      isActive: undefined
    },
    message: 'Sign up successful'
  };
}

/**
 * Login if user is valid
 *
 * @param {object} params
 */
export async function login(params) {
  logger.info('logging in');
  const { email, password } = params;

  const user = await getByEmail(email);
  if (!user) {
    logger.error('Email or Password is incorrect');
    throw new BadRequestError(`Email or password is incorrect`);
  }

  const isPasswordValid = checkPassword(password, user.password);

  if (!isPasswordValid) {
    logger.error('Email or Password is incorrect');
    throw new BadRequestError(`Email or password is incorrect`);
  }

  const tokenPayload = {
    id: user.id,
    email: user.email,
    username: `${user.username}`
  };

  //generate token from jwt
  const token = generateToken(tokenPayload);

  // await saveToken(user.id, token);

  return {
    data: {
      ...tokenPayload,
      token
    },
    message: 'successfully loged in'
  };
}

export async function deleteUser(userId) {
  logger.info(`deleting user with user id ${userId}`);
  await remove(userId);
  return {
    message: 'successfully deleted!'
  };
}
