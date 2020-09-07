import fs from 'fs';
import { Router } from 'express';

import * as endpoints from './constants/endpoints';
import * as userControllers from './controllers/users';

import {
    validateUserCreation,
    validateUserUpdate,
    validateInfoAddition,
    validateLogin
} from './schema/user';

const router = Router();

router.get('/', (request, response, next) => {
    console.log("sent response for route '/'");
    response.json({
        name: 'users-app',
        version: '1.0.0'
    });
});

router.get(endpoints.GET_USERS, userControllers.getAllUsers);

router.get(endpoints.GET_USERS_BY_ID, userControllers.getUserById);

router.post(endpoints.LOGIN, validateLogin, userControllers.login);

router.post(endpoints.CREATE_USER, validateUserCreation, userControllers.createUser);

router.delete(endpoints.DELETE_USER, userControllers.deleteUser);

router.put(endpoints.UPDATE_USER, validateUserUpdate, userControllers.updateUser);

// router.post("/infos", validateInfoAddition, (req, res, next) => {
// const params = req.body;
//   res.json({
//     message: "Addition successful",
//   });
//   fs.writeFileSync("../../docs.json", JSON.stringify(params, null, 2));
// });

export default router;
