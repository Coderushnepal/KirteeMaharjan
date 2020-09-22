import url from 'url';
import * as FoodServices from '../services/foods';

export function createFood(req, res, next) {
  console.log(req.body);
  FoodServices.createFood(req.body)
    .then(data => res.json(data))
    .catch(err => next(err));
}

export function getFoodById(req, res, next) {
  FoodServices.getFoodById(+req.params.id)
    .then(data => res.json(data))
    .catch(err => next(err));
}

export function searchFoods(req, res, next) {
  //get all params in request url
  console.log('SEarchvonfdshk');
  const params = url.parse(req.url, true).query;

  FoodServices.searchFood(params)
    .then(data => res.json(data))
    .catch(err => next(err));
}
