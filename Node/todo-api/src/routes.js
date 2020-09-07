import { Router } from 'express';

import { validateUserCreation } from './schema/Users';
import * as UserControllers from './controllers/users';
import { validateTodoAddition, validateTodoUpdate } from './schema/Todos';

const router = Router();

router.get('/', (req, res, next) => {
  res.json({
    app: 'todo-api',
    version: '1.0.0'
  });
});

router.get('/users/:userId/todos', UserControllers.getAllTodos);

router.get('/users/:userId/todos/:todoId', UserControllers.getSpecificTodo);

router.post('/users', validateUserCreation, UserControllers.createUser);

router.post('/users/:userId/todos', validateTodoAddition, UserControllers.addTodo);

router.delete('/users/:userId/todos/:todoId', UserControllers.deleteTodo);

router.put('/users/:userId/todos/:todoId', validateTodoUpdate, UserControllers.updateTodo);

export default router;
