import express from "express";
import {
  getAll,
  getById,
  getByName,
  updateArchitect,
} from "../controllers/architects";
import { register, login, logout } from "../controllers/auth";

const router = express.Router();

router.get("/", getAll);
router.get("/search", getByName);
router.get("/:id", getById);
router.put("/:id", updateArchitect);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
