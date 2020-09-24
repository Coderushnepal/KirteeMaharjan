import { Router } from 'express';

// import axios from 'axios';
import authenticate from './middlewares/jwtAuthenticate';
import * as UserController from './controllers/users';
import * as FoodControllers from './controllers/Foods';
import * as LogControllers from './controllers/userLogs';

import { validateFoodCreation, validateFoodSearch } from './schema/Foods';
import { validateAddFoodToLog, validateUpdateFoodToLog } from './schema/UserLogs';
import {
  validateUserCreation,
  validateUserLogin,
  validateUserGoalCreation,
  validateUserGoalUpdate
} from './schema/Users';

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

// users goals api

router.post('/users/goals/', authenticate, validateUserGoalCreation, UserController.createGoal);
router.put('/users/goals/', authenticate, validateUserGoalUpdate, UserController.updateGoal);
router.get('/users/goals/', authenticate, UserController.getGoal);

// user logs api

router.get('/users/logs/', authenticate, LogControllers.getByMealType);
router.get('/users/logs/:id', authenticate, LogControllers.getLogById);
router.post('/users/logs', authenticate, validateAddFoodToLog, LogControllers.addLog);
router.put('/users/logs/:id', authenticate, validateUpdateFoodToLog, LogControllers.updateLog);
router.delete('/users/logs/:id', authenticate, LogControllers.deleteLog);

// foods api

router.get('/foods/search', validateFoodSearch, FoodControllers.searchFoods);
router.get('/foods/:id', FoodControllers.getFoodById);
router.post('/foods', validateFoodCreation, FoodControllers.createFood);

export default router;
