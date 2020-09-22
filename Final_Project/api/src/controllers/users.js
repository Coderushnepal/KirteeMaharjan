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
