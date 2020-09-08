import logger from '../utils/logger';
import NotFoundError from '../utils/NotFoundError';
import { verifyUserById } from '../services/users';
import { getAll, getById, add, remove, update } from '../models/UserTodos';

/**
 * Get all todos for a user
 *
 * @param {number} userId
 */
export async function getAllTodos(userId) {
  logger.info(`Fetching todos for user with id ${userId}`);
  await verifyUserById(userId);

  const data = await getAll(userId);

  return {
    data,
    message: `List of todos for user with id ${userId}`
  };
}

/**
 * Get specific todo for a user
 *
 * @param {number} userId
 * @param {number} todoId
 */
export async function getTodoById(userId, todoId) {
  logger.info(`Fetching Todo with id ${todoId} for user with id ${userId}`);
  await verifyUserById(userId);

  const data = await getById(userId, todoId);

  if (!data) {
    logger.error(`Todo with id ${todoId} not found for user with id ${userId}`);
    throw new NotFoundError(`Todo with id ${todoId} not found for user with id ${userId}`);
  }

  return {
    data,
    message: 'Fetched Toto'
  };
}

/**
 * Add todo for a user
 *
 * @param {object} payload
 */
export async function addTodo(userId, { todoText }) {
  logger.info(`Checking for user having id ${userId}`);
  await verifyUserById(userId);

  logger.info(`Adding todo for user with id ${userId}`);
  const data = await add({ userId, todoText });

  return {
    data,
    message: 'Todo added.'
  };
}

/**
 * Remove a todo
 *
 * @param {number} todoId
 */
export async function deleteTodo(userId, todoId) {
  logger.info(`Removing todo for user ${userId}`);

  await verifyUserById(userId);

  await remove(userId, todoId);

  return {
    message: 'Todo removed.'
  };
}

/**
 * Update a todo
 * @param {number} userId
 * @param {number} todoId
 * @param {object} params
 */
export async function updateTodo(userId, todoId, params) {
  logger.info(`Updating  todo for user ${userId}`);

  await verifyUserById(userId);

  const data = await update(userId, todoId, params);

  return {
    data,
    message: 'Todo updated'
  };
}
