import express, { Request, Response } from "express";
import pool from "../db";
import { IArchitect } from "../types";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const correctTable = (URL: string) =>
  URL === "/api/architects" ? "architects" : "clients";

export const register = (req: Request, res: Response) => {
  // console.log("req", req.baseUrl);
  const { body, baseUrl } = req;
  const createUser = async () => {
    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(body.password, salt);
    //add hash into body
    const bodyWithHash = { ...body, password: hash };
    console.log("bodyhash", bodyWithHash);
    const registerQuery = `INSERT INTO ${correctTable(
      baseUrl
    )} (email, password, first_name, last_name, gender, age) VALUES ($1, $2, $3, $4, $5, $6)`;
    await pool.query(
      registerQuery,
      [
        bodyWithHash.email,
        bodyWithHash.password,
        bodyWithHash.first_name,
        bodyWithHash.last_name,
        bodyWithHash.gender,
        bodyWithHash.age,
      ],
      (error: any) => {
        if (error) {
          return res.status(500).json(error);
        }
        return res.status(200).json("User Successfully created");
      }
    );
  };

  //check if user exists;
  const userFound = `SELECT * from ${correctTable(baseUrl)} WHERE email= ($1)`;
  pool.query(
    userFound,
    [body.email],
    (error: any, results: { rows: IArchitect[] }) => {
      if (error) {
        return res.status(500).json(error);
      }
      if (results.rows.length > 0) {
        return res.status(409).json("User already exists!");
      }
      // return res.status(200).json("ok");
      return createUser();
    }
  );
};

export const login = (req: Request, res: Response) => {
  const { body, baseUrl } = req;
  const userFound = `SELECT * from ${correctTable(baseUrl)} WHERE email= ($1)`;
  pool.query(
    userFound,
    [body.email],
    (error: any, results: { rows: IArchitect[] }) => {
      console.log(results.rows);
      if (error) {
        return res.status(500).json(error);
      }
      if (results.rows.length === 0) {
        return res.status(404).json("User not found!");
      }
      //check password
      const checkPassword = bcrypt.compareSync(
        req.body.password,
        results.rows[0].password
      );
      if (!checkPassword) {
        return res.status(400).json("Wrong username or password!");
      }
      const token = jwt.sign({ id: results.rows[0].id }, "jwtkey");
      const { password, ...other } = results.rows[0];

      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    }
  );
};

export const logout = (req: Request, res: Response) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
