import express from "express";
import { getAll } from "../controllers/clients";
import { register, login, logout } from "../controllers/auth";
import { auth } from "../middlewares/auth";

const router = express.Router();

router.get("/", auth, getAll);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", auth, logout);

export default router;
