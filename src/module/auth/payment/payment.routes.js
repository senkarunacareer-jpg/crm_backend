import express from "express";
import { createPayment,getPayments } from "./payment.controller.js";
const router = express.Router();

router.post("/create", createPayment);
router.get("/get", getPayments);

export default router