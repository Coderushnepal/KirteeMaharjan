import url from 'url';
import * as UserLogServices from '../services/userLogs';

/**
 * Get foods by meal type for a particular day
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export async function getByMealType(req, res, next) {
  const params = url.parse(req.url, true).query;

  await UserLogServices.getByMealType(+req.user.id, params.date, params.mealType)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Add food to log
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export async function addLog(req, res, next) {
  await UserLogServices.addLog(req.body, +req.user.id)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * update already logged food
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export async function updateLog(req, res, next) {
  await UserLogServices.updateLog(req.body, +req.params.id, +req.user.id)
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * Delete logged food by id
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export async function deleteLog(req, res, next) {
  await UserLogServices.removeFood(+req.params.id)
    .then(data => res.json(data))
    .catch(err => next(err));
}
