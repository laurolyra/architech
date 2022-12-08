import express, { Request, Response } from "express";
import pool from "../db";
import { IClient } from "../types";

export const getAll = (req: Request, res: Response) => {
  pool.query(
    "SELECT * FROM clients",
    (error: any, results: { rows: IClient[] }) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};
