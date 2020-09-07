import logger from '../utils/logger';
import { hashPassword, checkPassword } from '../utils/crypt';
import NotFoundError from '../utils/NotFoundError';
import BadRequestError from '../utils/BadRequestError';
import { getByEmail, createUser, getById } from '../models/Users';

/**
 * Create  user.
 *
 * @param {object} payload
 */
export async function CreateUser(payload) {
  logger.info('Checking if email already exists');
  const { email, password } = payload;

  const userExist = await getByEmail(email);

  if (userExist) {
    logger.error('User with this Email already exists');
    throw new BadRequestError(`User with this Email already exists`);
  }

  const hash = hashPassword(password);

  const data = await createUser({ ...payload, password: hash });

  return {
    data,
    message: 'New user created'
  };
}

/**
 * Verify and log user in.
 *
 * @param {*} params
 */
export async function login(params) {
  const { email, password } = params;

  const existUser = await getByEmail(email);
  console.log(existUser);
  if (!existUser) {
    logger.error('Email or Password is incorrect');
    throw new BadRequestError(`Email or password is incorrect`);
  }

  const isPasswordValid = checkPassword(password, existUser.password);

  if (!isPasswordValid) {
    logger.error('Email or Password is incorrect');
    throw new BadRequestError(`Email or password is incorrect`);
  }

  return {
    message: 'successfully loged in'
  };
}

/**
 * Verify user by id.
 *
 * @param {*} id
 */
export async function verifyUserById(id) {
  logger.info(`Verifying user with id ${id}`);
  const user = await getById(id);

  if (!user) {
    logger.error(`User with id ${id} not Found.`);
    throw new NotFoundError(`User with id ${id} not Found.`);
  }
}
