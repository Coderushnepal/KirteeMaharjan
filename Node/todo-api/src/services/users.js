import logger from '../utils/logger';
import BadRequestError from '../utils/BadRequestError';
import NotFoundError from '../utils/NotFoundError';
import { getByEmail, createUser, getById } from '../models/Users';

export async function CreateUser(payload) {
  logger.info('Checking if email already exists');
  const { email } = payload;

  await verifyUserByEmail(email);

  const data = await createUser(payload);

  return {
    data,
    message: 'New user created'
  };
}

export async function verifyUserByEmail(email) {
  const user = await getByEmail(email);

  if (user) {
    logger.error('User with this Email already exists');
    throw new BadRequestError(`User with this Email already exists`);
  }
}

export async function verifyUserById(id) {
  const user = await getById(id);

  if (!user) {
    logger.error(`User with id ${id} not Found.`);
    throw new NotFoundError(`User with id ${id} not Found.`);
  }
}
