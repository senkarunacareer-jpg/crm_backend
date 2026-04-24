import express from "express"
import { createBatch,getBatches } from "./batches.controller.js";

const router = express.Router();

router.post("/create", createBatch);
router.get("/get", getBatches);

export default router 