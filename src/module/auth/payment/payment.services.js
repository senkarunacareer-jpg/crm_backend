import pool from "../../../config/db.config.js";
import { createPaymentQuery,getPaymentsQuery } from "./payment.queries.js";

export const createPaymentservice = async (data) => {
  const { admission_id, amount, payment_mode } = data;

  const [result] = await pool.execute(createPaymentQuery, [
    admission_id,
    amount,
    payment_mode,
  ]);

  return result;
};

export const getPaymentsservice = async () => {
  const [rows] = await pool.execute(getPaymentsQuery);
  return rows;
};