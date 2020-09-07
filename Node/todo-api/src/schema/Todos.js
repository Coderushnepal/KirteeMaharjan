import joi from 'joi';

const ADD_TODO_SCHEMA = joi.object().keys({
  todoText: joi.string().max(500).min(0).required()
});

const UPDATE_TODO_SCHEMA = joi
  .object()
  .keys({
    todoText: joi.string().max(500).min(0),
    isCompleted: joi.boolean()
  })
  .min(1);

export function validateTodoAddition(res, req, next) {
  try {
    joi.assert(res.body, ADD_TODO_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}

export function validateTodoUpdate(res, req, next) {
  try {
    joi.assert(res.body, UPDATE_TODO_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}
