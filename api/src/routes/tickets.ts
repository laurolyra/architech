import express from "express";
import {
  archiveTicket,
  createTicket,
  getAll,
  getById,
  groupTickets,
  updateTicket,
} from "../controllers/tickets";

const router = express.Router();

router.get("/", getAll);
router.get("/group", groupTickets);
router.post("/new", createTicket);
router.get("/:id", getById);
router.put("/:id/archive", archiveTicket);
router.put("/:id", updateTicket);

export default router;
