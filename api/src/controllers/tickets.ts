import express, { Request, Response } from "express";
import { ResultBuilder } from "pg";
import pool from "../db";
import { ITicket } from "../types";

export const getAll = (req: Request, res: Response) => {
  pool.query(
    `SELECT * FROM tickets`,
    (error: any, results: { rows: ITicket[] }) => {
      if (error) {
        return res.status(500).json(error);
      }
      res.status(200).json(results.rows);
    }
  );
};

export const groupTickets = (req: Request, res: Response) => {
  const { body } = req;
  // console.log("body", body);
  const filterByParties = `
    SELECT
    t.id,
    t.description,
    t.price,
    t.status,
    a.first_name AS a_first_name,
    a.last_name AS a_last_name,
    c.first_name AS c_first_name,
    c.last_name AS c_last_name
    FROM tickets AS t
    INNER JOIN architects AS a
    ON a.id = t.architect_id
    INNER JOIN clients AS c
    ON c.id = t.client_id
    WHERE a.id =($1)
    AND c.id=($2);
  `;
  pool.query(
    filterByParties,
    [body.architect_id, body.client_id],
    (error: any, results: { rows: ITicket[] }) => {
      if (error) {
        return res.status(500).json(error);
      }
      if (results.rows.length === 0) {
        return res.status(404).json("No ticket found");
      }
      res.status(200).json(results.rows[0]);
    }
  );
};

export const getById = (req: Request, res: Response) => {
  const { params } = req;
  pool.query(
    `SELECT * FROM tickets WHERE id = ($1)`,
    [params.id],
    (error: any, results: { rows: ITicket[] }) => {
      if (error) {
        return res.status(500).json(error);
      }
      if (results.rows.length === 0) {
        return res.status(404).json("No ticket found");
      }
      res.status(200).json(results.rows[0]);
    }
  );
};

export const updateTicket = (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, architect_id, client_id, price, status } = req.body;
  pool.query(
    `UPDATE tickets 
    SET description = $1, architect_id = $2, client_id = $3, price = $4, status = $5 
    WHERE id = $6`,
    [description, architect_id, client_id, price, status, id],
    (error: any, results: ResultBuilder) => {
      if (error) {
        return res.status(500).json(error);
      }
      res
        .status(200)
        .json({ status: results.command, message: "user updated" });
    }
  );
};

export const archiveTicket = (req: Request, res: Response) => {
  const { params } = req;
  pool.query(
    `UPDATE tickets SET status = -1 WHERE id = $1`,
    [params.id],
    (error: any, results: ResultBuilder) => {
      if (error) {
        return res.status(500).json(error);
      }
      res.status(200).json({
        status: results.command,
        message: "Ticket removed from database",
      });
    }
  );
};

export const createTicket = async (req: Request, res: Response) => {
  const { architect_id, description, price, client_id, status } = req.body;

  const postTicket = async () => {
    const registerQuery = `INSERT INTO tickets
      (architect_id, description, price, client_id, status)
      VALUES
      ($1, $2, $3, $4, $5)`;
    await pool.query(
      registerQuery,
      [architect_id, description, price, client_id, status],
      (error: any, results: ResultBuilder) => {
        if (error) {
          return res.status(500).json(error);
        }
        return res.status(200).json({
          status: results.command,
          message: "Ticket Successfully created",
        });
      }
    );
  };
};
