import express from "express";
import {
  getAll,
  getById,
  getByName,
  updateArchitect,
} from "../controllers/architects";
import { register, login, logout } from "../controllers/auth";
import { auth } from "../middlewares/auth";

const router = express.Router();

router.get("/", auth, getAll);
router.get("/search", auth, getByName);
router.get("/:id", auth, getById);
router.put("/:id", auth, updateArchitect);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", auth, logout);

export default router;
