import express from "express";
import {
  createTicket,
  getAll,
  getById,
  updateTicket,
  // getByName,
} from "../controllers/tickets";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", updateTicket);
router.post("/new", createTicket);
// router.get("/search", getByName);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;
