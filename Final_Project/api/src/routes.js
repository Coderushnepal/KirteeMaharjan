import { Router } from 'express';

import axios from 'axios';
import authenticate from './middlewares/jwtAuthenticate';
import * as UserController from './controllers/users';
import * as FoodControllers from './controllers/Foods';
import { validateFoodCreation, validateFoodSearch } from './schema/Foods';
import { validateUserCreation, validateUserLogin } from './schema/Users';

const router = Router();

router.get('/', (req, res, next) => {
  res.json({
    name: 'calorie-counter-api',
    version: '1.0.0'
  });
});

// users api

router.post('/login', validateUserLogin, UserController.login);
router.post('/users', validateUserCreation, UserController.createUser);
router.delete('/users', authenticate, UserController.deleteUser);

// foods api

router.get('/foods/search', validateFoodSearch, FoodControllers.searchFoods);
router.get('/foods/:id', FoodControllers.getFoodById);
router.post('/foods', validateFoodCreation, FoodControllers.createFood);

const apiKey = '0db5e46cf6bf4bec93082892e85dbd70';

const fetchMeal = async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apiKey}&maxCalories=200&offset=1&number=50`
    );
    console.log('**********************************', data);
    res.json(data);
    next();
  } catch (err) {
    console.log(err);
  }
};

router.get('/fetch', fetchMeal);

export default router;
