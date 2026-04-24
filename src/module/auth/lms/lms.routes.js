import express from "express";
import { createSubject,createLesson,createTest } from "./lms.controller.js";

const router = express.Router();

router.post("/subject", createSubject);
router.post("/lesson", createLesson);
router.post("/test", createTest);

export default router