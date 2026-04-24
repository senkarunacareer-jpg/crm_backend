import pool from "../../../config/db.config.js";
import { createBatchquery, getBatchquery } from "./batches.queries.js";

export  const createbatchservice = async (data) => {
  const { course_id, trainer_id, start_date, end_date, timing } = data;

  const [result] = await pool.execute(createBatchquery, [
    course_id,
    trainer_id,
    start_date,
    end_date,
    timing,
  ]);

  return result;
};

export const getBatchservice = async () => {
  const [rows] = await pool.execute(getBatchquery);
  return rows;
};