import * as userServices from "../services/users";

/**
 *Controller to get all the users
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export function getAllUsers(req, res, next) {
  const data = userServices
    .getAllUsers()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 *Controller to user with userId
 *
 * @param {userId} req
 * @param {*} res
 * @param {*} next
 */

export function getUserById(req, res, next) {
  userServices
    .getUserById(+req.params.userId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to create new user
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export function createUser(req, res, next) {
  userServices
    .createUsers(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controler to delete user
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export function deleteUser(req, res, next) {
  console.log(+req.params.userId);
  try {
    const data = userServices.deleteUser(+req.params.userId);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

/**
 * Controler to update user
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

export function updateUser(req, res, next) {
  try {
    const data = userServices.updateUser(+req.params.userId, req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
}
