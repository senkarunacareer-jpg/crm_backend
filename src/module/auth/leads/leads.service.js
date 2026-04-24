import pool from "../../../config/db.config.js";
import { createLeadquery,getLeadsquery } from "./leads.queries.js";


export const createLeadservice = async (data) => {
  const {
    name,
    phone,
    email,
    source,
    referred_by,
    assigned_to,
    status,
  } = data;

  const [result] = await pool.execute(createLeadquery, [
    name,
    phone,
    email,
    source,
    referred_by || null,
    assigned_to || null,
    status || "new",
  ]);

  return result;
};

export const getLeadsservice = async () => {
  const [rows] = await pool.execute(getLeadsquery);
  return rows;
};