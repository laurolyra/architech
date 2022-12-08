import express from "express";
import { getAll } from "../controllers/clients";
import { register, login, logout } from "../controllers/auth";

const router = express.Router();

router.get("/", getAll);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
