import { body } from "express-validator";
import { withValidationErrors } from "./withErrorMiddleware.js";
import {
  isValidName,
  isMobileNumber,
  isValidPasswordFormat,
} from "../frontend/src/utils/formatValidations.js";
import pool from "../db.js";
import { BadRequestError } from "../errors/customErrors.js";

export const regFormValidator = withValidationErrors([
  body("usertype").trim().notEmpty().withMessage("User Type is required"),
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .custom(isValidName)
    .withMessage("Invalid Name"),
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 6, max: 16 })
    .withMessage("Username must be between 6 to 16 characters")
    .custom(async (value) => {
      const check = await pool.query(
        `select count(uid) from users where username=$1`,
        [value]
      );
      if (Number(check.rows[0].count) > 0) {
        throw new BadRequestError("Username exists");
      }
      return true;
    }),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email"),

  body("mobile")
    .trim()
    .notEmpty()
    .withMessage("Mobile is required")
    .isNumeric()
    .withMessage("Invalid Mobile Number")
    .custom(isMobileNumber)
    .withMessage("Mobile Number must be of 10 digits"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be of minimum 8 characters")
    .custom(isValidPasswordFormat)
    .withMessage(
      "Password should be minimum eight characters at least one uppercase letter one lowercase letter one number and one special character"
    ),

  body("confirmPassword")
    .notEmpty()
    .withMessage("Confirm Password is required")
    .custom((value, { req }) => {
      const { password } = req.body;
      if (password !== value) {
        throw new BadRequestError(
          `Password and Confirm Password does not match`
        );
      }
      return true;
    }),
]);

export const loginFormValidator = withValidationErrors([
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 6, max: 16 })
    .withMessage("Username must be between 6 to 16 characters")
    .custom(async (value) => {
      const check = await pool.query(
        `select count(uid) from users where username=$1`,
        [value]
      );
      if (Number(check.rows[0].count) === 0) {
        throw new BadRequestError("Username not available");
      }
      return true;
    }),
]);
