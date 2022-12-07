import express from "express";
import { test } from "../controllers/architects";

const router = express.Router();

router.post("/test", test);
// router.post("/login", login);
// router.post("/logout", logout);

export default router;
