//users api
export const CREATE_USER = '/users';
export const LOGIN = '/users/login';

//todos api
export const GET_ALL_TODOS = '/users/:userId/todos';
export const GET_TODO_BY_ID = '/users/:userId/todos/:todoId';
export const ADD_TODO = '/users/:userId/todos';
export const REMOVE_TODO = '/users/:userId/todos/:todoId';
export const UPDATE_TODO = '/users/:userId/todos/:todoId';
