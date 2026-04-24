import express from "express";
import { createEmployee,getEmployees } from "./employees.controller.js";

const router = express.Router();

router.post("/create", createEmployee);
router.get("/get", getEmployees);

export default router;