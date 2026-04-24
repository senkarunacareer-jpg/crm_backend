import pool from "../../../config/db.config.js";
import { createFollowupquery,getFollowupsquery,addLogquery } from "./followup.queries.js";

export const createFollowupservice = async (data) => {
  const { lead_id, followup_date } = data;

  const [result] = await pool.execute( createFollowupquery, [
    lead_id,
    followup_date,
  ]);

  return result;
};

export const addLogservice = async (data) => {
  const { followup_id, conversation } = data;

  const [result] = await pool.execute(addLogquery, [
    followup_id,
    conversation,
  ]);

  return result;
};

export const getFollowupsservice = async () => {
  const [rows] = await pool.execute(getFollowupsquery);
  return rows;
};