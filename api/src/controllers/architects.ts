import express, { Request, Response } from "express";
import { ResultBuilder } from "pg";
import pool from "../db";
import { IArchitect } from "../types";

export const getAll = (req: Request, res: Response) => {
  pool.query(
    "SELECT * FROM architects",
    (error: any, results: { rows: IArchitect[] }) => {
      if (error) {
        return res.status(500).json(error);
      }
      if (results.rows.length === 0) {
        return res.status(404).json("No architect found");
      }
      res.status(200).json(
        results.rows.map((row) => {
          const { password, ...otherKeys } = row;
          return otherKeys;
        }),
      );
    },
  );
};

export const getByName = (req: Request, res: Response) => {
  const { body } = req;
  pool.query(
    "SELECT first_name, last_name, CONCAT(CONCAT(first_name, ' '), last_name) full_name FROM architects WHERE CONCAT(CONCAT(first_name, ' '), last_name) LIKE ($1)",
    [body.name],
    (error: any, results: { rows: IArchitect[] }) => {
      if (error) {
        return res.status(500).json(error);
      }
      if (results.rows.length === 0) {
        return res.status(404).json("No architect found");
      }
      res.status(200).json(
        results.rows.map((row) => {
          const { password, ...otherKeys } = row;
          return otherKeys;
        }),
      );
    },
  );
};

export const getById = (req: Request, res: Response) => {
  // console.log("getById", req);
  const { params } = req;
  pool.query(
    "SELECT * FROM architects WHERE id = ($1)",
    [params.id],
    (error: any, results: { rows: IArchitect[] }) => {
      if (error) {
        return res.status(500).json(error);
      }
      if (results.rows.length === 0) {
        return res.status(404).json("No architect found");
      }
      const { password, ...otherKeys } = results.rows[0];
      res.status(200).json(otherKeys);
    },
  );
};

export const updateArchitect = (req: Request, res: Response) => {
  const { id } = req.params;
  const { first_name, last_name, email, phone } = req.body;
  pool.query(
    "UPDATE architects SET first_name = $1, last_name = $2, email = $3, phone = $4 WHERE id = $5",
    [first_name, last_name, email, phone, id],
    (error: any, results: ResultBuilder) => {
      if (error) {
        return res.status(500).json(error);
      }
      res
        .status(200)
        .json({ status: results.command, message: "user updated" });
    },
  );
};

export const deleteArchitect = (req: Request, res: Response) => {
  const { params } = req;
  pool.query(
    "DELETE FROM users WHERE id = $1",
    [params.id],
    (error: any, results: ResultBuilder) => {
      if (error) {
        return res.status(500).json(error);
      }
      res.status(200).json({
        status: results.command,
        message: "User removed from database",
      });
    },
  );
};
