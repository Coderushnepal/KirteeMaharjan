import joi from 'joi';

const CREATE_USER_SHEMA = joi.object().keys({
    firstName: joi.string().max(20).min(0).required(),
    lastName: joi.string().max(20).min(0).required(),
    email: joi.string().max(100).required(),
    password: joi.string().max(100).required(),
    phoneNumbers: joi
        .array()
        .required()
        .min(0)
        .items(
            joi.object().keys({
                number: joi.number().min(9000000000).max(9999999999).required(),
                type: joi.string().valid('home', 'cell', 'work').required()
            })
        )
});

const UPDATE_USER_SHEMA = joi
    .object()
    .keys({
        firstName: joi.string().max(20).min(0),
        lastName: joi.string().max(20).min(0)
    })
    .min(1);

const LOGIN_SHEMA = joi
    .object()
    .keys({
        email: joi.string().max(100).min(0).required(),
        password: joi.string().max(200).min(0).required()
    })
    .min(1);

export const validateUserCreation = (req, res, next) => {
    /*
  const { error } = CREATE_USER_SHEMA.validate(req.body);
  if (error) {
    res.json({
      message: "Invalid data",  
      error: error.details,
    });
  } else {
    next();
  } 
  */

    try {
        joi.assert(req.body, CREATE_USER_SHEMA);

        next();
    } catch (error) {
        next(error);
    }
};

export const validateUserUpdate = (req, res, next) => {
    try {
        joi.assert(req.body, UPDATE_USER_SHEMA);

        next();
    } catch (error) {
        next(error);
    }
};

export const validateLogin = (req, res, next) => {
    try {
        joi.assert(req.body, LOGIN_SHEMA);

        next();
    } catch (error) {
        next(error);
    }
};

/**
 * Assignment: Create on given conditions Schema
 *
 */

const CREATE_INFO_SHEMA = joi.object().keys({
    title: joi.string().required().min(0).max(200),
    details: joi.string().min(0).max(1000).required(),
    typeId: joi.number().valid(1, 2, 3, 4, 5),
    attachments: joi
        .array()
        .items(
            joi.object({
                url: joi.string().uri().required,
                filename: joi.string()
            })
        )
        .required(),
    isPrivate: joi.bool().required()
});

export const validateInfoAddition = (req, res, next) => {
    try {
        joi.assert(req.body, CREATE_INFO_SHEMA);
        next();
    } catch (err) {
        next(err);
    }
};
