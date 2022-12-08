import express, { Request, Response } from "express";
import pool from "../db";
import { IClient } from "../types";

export const getAll = (req: Request, res: Response) => {
  pool.query(
    "SELECT * FROM clients",
    (error: any, results: { rows: IClient[] }) => {
      if (error) {
        return res.status(500).json(error);
      }
      if (results.rows.length === 0) {
        return res.status(404).json("No client found");
      }
      res.status(200).json(results.rows);
    }
  );
};
