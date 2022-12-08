import pool from "../db";
import { IArchitect } from "../types";

export const getAll = (req: any, res: any) => {
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
