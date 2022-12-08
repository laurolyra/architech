import express, { Request, Response } from "express";
import pool from "../db";
import { IArchitect } from "../types";

export const getAll = (req: Request, res: Response) => {
  pool.query(
    "SELECT * FROM architects",
    (error: any, results: { rows: IArchitect[] }) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};
