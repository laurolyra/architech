import express from "express";
import {
  archiveTicket,
  createTicket,
  getAll,
  getById,
  groupTickets,
  updateTicket,
} from "../controllers/tickets";
import { auth } from "../middlewares/auth";

const router = express.Router();

router.get("/", auth, getAll);
router.get("/group", auth, groupTickets);
router.post("/new", auth, createTicket);
router.get("/:id", auth, getById);
router.put("/:id/archive", auth, archiveTicket);
router.put("/:id", auth, updateTicket);

export default router;
