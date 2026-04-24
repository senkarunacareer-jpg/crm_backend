import pool from "../../../config/db.config.js";
import { createAdmissionquery,getAdmissionsquery } from "./admission.queries.js";

export const createAdmissionservice = async (data) => {
  const { lead_id, student_name, course_id, batch_id } = data;

  const [result] = await pool.execute(createAdmissionquery, [
    lead_id,
    student_name,
    course_id,
    batch_id,
  ]);

  return result;
};

export const getAdmissionsservice = async () => {
  const [rows] = await pool.execute(getAdmissionsquery);
  return rows;
};