import express, { Request, Response } from "express";
import { ResultBuilder } from "pg";
import pool from "../db";
import { ITicket } from "../types";

export const getAll = (req: Request, res: Response) => {
  pool.query(
    "SELECT * FROM tickets",
    (error: any, results: { rows: ITicket[] }) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

export const getById = (req: Request, res: Response) => {
  const { params } = req;
  pool.query(
    "SELECT * FROM tickets WHERE id = ($1)",
    [params.id],
    (error: any, results: { rows: ITicket[] }) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows[0]);
    }
  );
};

export const updateTicket = (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, architect_id, client_id, price, status } = req.body;
  pool.query(
    "UPDATE tickets SET description = $1, architect_id = $2, client_id = $3, price = $4, status = $5 WHERE id = $6",
    [description, architect_id, client_id, price, status, id],
    (error: any, results: ResultBuilder) => {
      if (error) {
        throw error;
      }
      res
        .status(200)
        .json({ status: results.command, message: "user updated" });
    }
  );
};

export const deleteArchitect = (req: Request, res: Response) => {
  const { params } = req;
  pool.query(
    "DELETE FROM users WHERE id = $1",
    [params.id],
    (error: any, results: ResultBuilder) => {
      if (error) {
        throw error;
      }
      res.status(200).json({
        status: results.command,
        message: "User removed from database",
      });
    }
  );
};

export const createTicket = async (req: Request, res: Response) => {
  const { architect_id, description, price, client_id, status } = req.body;
  //TODO: rever pq essa rota n funcinoa no insomnia
  const createUser = async () => {
    const registerQuery = `INSERT INTO tickets
      (architect_id, description, price, client_id, status)
      VALUES
      ($1, $2, $3, $4, $5)`;
    await pool.query(
      registerQuery,
      [architect_id, description, price, client_id, status],
      (error: any) => {
        if (error) {
          return res.status(500).json(error);
        }
        return res.status(200).json("Ticket Successfully created");
      }
    );
  };
};
