import * as User from '../models/User';
// import usersJsonData from '../data/users';
import NotFoundError from '../utils/NotFoundError';
import * as UserPhoneNumber from '../models/UserPhoneNumber';

import logger from '../utils/logger';
import connection from '../db';
import snakeize from 'snakeize';
/**
 * Fetch all users
 *
 */

export async function getAllUsers() {
    logger.info('Fetching all users info');

    const users = await User.getAll();
    console.log(users);

    const data = users.map((user) => {
        const phoneNumbers = Object.keys(user.phoneNumbers[0]).length ? user.phoneNumbers : [];

        return {
            ...user,
            phoneNumbers
        };
    });

    return {
        message: 'List of all users',
        data
    };
}

/**
 * Fetch user by uid
 *
 * @param userId
 */

export async function getUserById(userId) {
    logger.info(`Fetching user with id ${userId}`);

    const requestedUser = await User.getById(userId);
    console.log('Rwquested user =', requestedUser);

    if (!requestedUser) {
        logger.error(`Cannot find user with userId ${userId}`);
        throw new NotFoundError(`Cannot find user with userId ${userId}`);
    }

    const phoneNumbers = await UserPhoneNumber.getPhoneNumbersByUserId(userId);

    return {
        message: `Information about user with userId ${userId}`,
        data: {
            ...requestedUser,
            phoneNumbers
        }
    };
}

/**
 * Create a user
 *
 * @param  params
 */

export async function createUsers(params) {
    const { firstName, lastName, email, password, phoneNumbers } = params;

    const userInsertData = await User.create({
        firstName,
        lastName,
        email,
        password
    });

    const insertDataForPhoneNumbers = phoneNumbers.map((phone) => ({
        userId: userInsertData.id,
        phoneNumber: phone.number,
        type: phone.type
    }));

    const phoneNumberInsertedData = await UserPhoneNumber.add(insertDataForPhoneNumbers);

    return {
        message: 'New user added ',
        params
    };
}

/**
 * Delete a user
 *
 * @param userId
 */

export async function deleteUser(userId) {
    logger.info(`Deleting user with userId ${userId}`);

    await verifyUserExistence(userId);

    await User.remove(userId);

    return {
        message: `deleted user with id ${userId}`
    };
}

/**
 * Update user
 *
 * @param userId
 * @param params
 */

export async function updateUser(userId, params) {
    logger.info(`Updating users with userid ${userId}`);

    const result = await verifyUserExistence(userId);

    await User.update(userId, params);

    return {
        message: `successfully updated user wit id ${userId}`,
        data: {
            ...result,
            ...params
        }
    };
}

/**
 * Verifying user exixtence
 *
 * @param userId
 *
 */

export async function verifyUserExistence(userId) {
    logger.info(`fetching user information with id ${userId}`);

    const result = await User.getById(userId);

    if (!result) {
        logger.error(`User with user id ${userId} does not exist`);
        throw new NotFoundError(`User with user id ${userId} does not exist`);
    }

    return result;
}
