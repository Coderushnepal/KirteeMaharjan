import * as UserServices from '../services/users';

/**
 * Create user
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function createUser(req, res, next) {
  UserServices.createUser(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Login
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function login(req, res, next) {
  UserServices.login(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Delete user
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function deleteUser(req, res, next) {
  UserServices.deleteUser(+req.user.id)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Create user goal
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function createGoal(req, res, next) {
  UserServices.createGoal(req.body, +req.user.id)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Update user goal
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function updateGoal(req, res, next) {
  UserServices.updateGoal(req.body, +req.user.id)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Get user goal
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export function getGoal(req, res, next) {
  UserServices.getGoal(+req.user.id)
    .then(data => res.json(data))
    .catch(err => next(err));
}
