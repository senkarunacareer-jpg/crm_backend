import express from "express";
import { createFollowup,addLog,getFollowups } from "./followup.controller.js";

const router = express.Router();

router.post("/create", createFollowup);
router.post("/log", addLog);
router.get("/get", getFollowups);

export default router