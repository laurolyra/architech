import express from "express";
import { getAll } from "../controllers/architects";

const router = express.Router();

router.get("/", getAll);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;
