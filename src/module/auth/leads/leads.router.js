import express from "express"
import { createLead,getLeads } from "./leads.controller.js";

const router = express.Router();

router.post("/create", createLead);
router.get("/get", getLeads);

export default router