import fs from "fs";
import connection from "../db";

import logger from "../utils/logger";
import * as User from "../models/User";
import usersJsonData from "../data/users";
import NotFoundError from "../utils/NotFoundError";
import * as UserPhoneNumber from "../models/UserPhoneNumber";

/**
 * Fetch all users
 *
 */

export async function getAllUsers() {
  logger.info("Fetching all users info");

  const data = await User.getAll();
  return {
    message: "List of all users",
    data,
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

  if (!requestedUser) {
    logger.error(`Cannot find user with userId ${userId}`);
    throw new NotFoundError(`Cannot find user with userId ${userId}`);
  }

  return {
    message: `Information about user with userId ${userId}`,
    data: requestedUser,
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
    password,
  });

  const insertDataForPhoneNumbers = phoneNumbers.map((phone) => ({
    userId: userInsertData.id,
    phoneNumber: phone.number,
    type: phone.type,
  }));

  const phoneNumberInsertedData = await UserPhoneNumber.add(
    insertDataForPhoneNumbers
  );
  console.log(phoneNumberInsertedData);

  return {
    message: "New user added ",
    params,
  };
}

/**
 * Delete a user
 *
 * @param userId
 */

export function deleteUser(userId) {
  logger.info(`Deleting user with userId ${userId}`);

  const doesUserExist = usersJsonData.find((user) => user.id === userId);

  if (!doesUserExist) {
    logger.error(`User with user id ${userId} does not exist`);
    throw new NotFoundError(`User with user id ${userId} does not exist`);
  }

  let deletedUser = null;

  const updatedUserList = usersJsonData.filter((user) => {
    if (user.id === userId) {
      console.log("true");
      deletedUser = user;
    }
    return user.id !== userId;
  });

  usersJsonData = updatedUserList;

  return {
    message: "successfully deleted",
    data: deletedUser,
  };
}

/**
 * Update user
 *
 * @param userId
 * @param params
 */

export function updateUser(userId, params) {
  logger.info(`Updating users with userid ${userId}`);

  const doesUserExist = usersJsonData.find((user) => user.id === userId);

  if (!doesUserExist) {
    logger.info(`User not found with userId ${userId}`);
    throw new NotFoundError(`User not found with userId  ${userId}`);
  }

  const updatedUser = usersJsonData.map((user) => {
    if (userId === user.id) {
      return {
        ...user,
        ...params,
      };
    }
    return user;
  });

  usersJsonData = updateUser;

  return {
    message: `successfully updated user wit id ${userId}`,
    data: updateUser,
  };
}
