import pool from "../../../config/db.config.js";
import { createSubjectQuery,createLessonQuery,createTestQuery } from "./lms.query.js";

export const createSubjectService = async (data) => {
  const [res] = await pool.execute(createSubjectQuery, [
    data.course_id,
    data.name,
  ]);
  return res;
};

export const createLessonService = async (data) => {
  const [res] = await pool.execute(createLessonQuery, [
    data.subject_id,
    data.title,
  ]);
  return res;
};

export const createTestService = async (data) => {
  const [res] = await pool.execute(createTestQuery, [
    data.subject_id,
    data.title,
  ]);
  return res;
};