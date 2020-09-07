import * as UserServices from '../services/users';
import * as TodoServices from '../services/todos';

/**
 * Create a user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function createUser(req, res, next) {
  UserServices.CreateUser(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Get all todos for a user
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function getAllTodos(req, res, next) {
  TodoServices.getAllTodos(+req.params.userId)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Get specific todo for a user
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function getSpecificTodo(req, res, next) {
  TodoServices.getTodoById(+req.params.userId, +req.params.todoId)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Add todo
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function addTodo(req, res, next) {
  TodoServices.addTodo(+req.params.userId, req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Remove todo
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function deleteTodo(req, res, next) {
  TodoServices.deleteTodo(+req.params.userId, +req.params.todoId)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Update todo
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function updateTodo(req, res, next) {
  TodoServices.updateTodo(+req.params.userId, +req.params.todoId, req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Login user
 *
 * @param {*} params
 */
export function login(req, res, next) {
  console.log('USersController');
  UserServices.login(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}
