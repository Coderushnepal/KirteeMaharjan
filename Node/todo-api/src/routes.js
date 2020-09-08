import { Router } from 'express';

import * as endpoints from './constants/endpoints';
import authenticate from './middlewares/authenticate';
import * as UserControllers from './controllers/users';
import { validateUserCreation, validateUserLogin } from './schema/Users';
import { validateTodoAddition, validateTodoUpdate } from './schema/Todos';

const router = Router();

router.get('/', (req, res, next) => {
  res.json({
    app: 'todo-api',
    version: '1.0.0'
  });
});

router.get(endpoints.GET_ALL_TODOS, authenticate, UserControllers.getAllTodos);

router.get(endpoints.GET_TODO_BY_ID, authenticate, UserControllers.getSpecificTodo);

router.post(endpoints.CREATE_USER, validateUserCreation, UserControllers.createUser);

router.post(endpoints.ADD_TODO, authenticate, validateTodoAddition, UserControllers.addTodo);

router.delete(endpoints.REMOVE_TODO, authenticate, UserControllers.deleteTodo);

router.put(endpoints.UPDATE_TODO, authenticate, validateTodoUpdate, UserControllers.updateTodo);

router.post(endpoints.LOGIN, validateUserLogin, UserControllers.login);

export default router;
