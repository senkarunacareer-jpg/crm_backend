import express from "express"
import { createCourse,getCourses } from "./course.controller.js";

const router = express.Router();

router.post("/create", createCourse);
router.get("/get", getCourses);

export default router;