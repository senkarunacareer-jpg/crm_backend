import pool from "../../../config/db.config.js";
import { createCoursequery,getCoursesquery } from "./course.queries.js";

export const createCourseservice = async (data) => {
  const [result] = await pool.execute(createCoursequery, [data.name]);
  return result;
};

export const getCoursesservice = async () => {
  const [rows] = await pool.execute(getCoursesquery);
  return rows;
};