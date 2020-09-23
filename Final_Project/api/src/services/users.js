import logger from '../utils/logger';
import { generateToken } from '../utils/jwt';
import BadRequestError from '../utils/BadRequestError';
import { getByEmail, CreateUser, remove } from '../models/Users';
import { hashPassword, checkPassword } from '../utils/crypt';
import { set, update, get } from '../models/UserGoal';
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

/**
 *
 * @param {integer} userId
 */
export async function deleteUser(userId) {
  logger.info(`deleting user with user id ${userId}`);
  await remove(userId);
  return {
    message: 'successfully deleted!'
  };
}

export async function createGoal(payload, userId) {
  logger.info(`setting goal for user with id ${userId}`);

  payload = {
    ...payload,
    userId
  };
  const data = await set(payload);
  return {
    data,
    message: 'Goal set Successful'
  };
}

/**
 * Update goal
 *
 * @param {*} payload
 * @param {*} userId
 */
export async function updateGoal(payload, userId) {
  logger.info(`update goal for user with id ${userId}`);

  const data = await update(payload, userId);
  return {
    data,
    message: 'Goal update Successful'
  };
}

/**
 *
 * @param {integer} userId
 */

export async function getGoal(userId) {
  logger.info(`Upadting user goal`);

  const data = await get(userId);
  return {
    data,
    message: `retrived goal for user`
  };
}
