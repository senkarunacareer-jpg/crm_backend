import pool from "../../../config/db.config.js";
import { createEmployeeQuery,getEmployeesQuery,getEmployeeByIdQuery } from "./employees.queries.js";

export const createEmployeeService = async (data) => {
  const { name, role, joining_date, reporting_to } = data;
  console.log(data.name)

  const [result] = await pool.execute(createEmployeeQuery, [
    name,
    role,
    joining_date,
    reporting_to || null,
  ]);

  return result;
};

export const getEmployeesService = async () => {
  const [rows] = await pool.execute(getEmployeesQuery);
  return rows;
};