import express from "express"
import { createAdmission,getAdmissions } from "./admission.controller.js";

const router = express.Router();

router.post("/create", createAdmission);
router.get("/get", getAdmissions);

export default router;