import { StatusCodes } from "http-status-codes";
import pool from "../db.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { createdDate } from "../utils/commonFunctions.js";

export const register = async (req, res) => {
  const { usertype, name, email, mobile, username, password, confirmPassword } =
    req.body;
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  const uuid = uuidv4();
  const roleid = req.body.usertype === "C" ? 3 : 2;
  const mydate = createdDate(new Date(Date.now()));
  try {
    await pool.query(`BEGIN`);
    const insertRegDetails = await pool.query(
      `insert into users(uuid, username, password, name, mobile, email, role_id, created_date) values ($1, $2, $3, $4, $5, $6, $7, $8) returning uid`,
      [
        uuid,
        req.body.username,
        hash,
        req.body.name,
        req.body.mobile,
        req.body.email,
        roleid,
        mydate,
      ]
    );
    await pool.query(`COMMIT`);
    res.status(StatusCodes.CREATED).json({ insertRegDetails });
  } catch (error) {
    await pool.query(`ROLLBACK`);
    return error;
  }
};

export const login = async (req, res) => {};
