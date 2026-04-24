import { success } from "../../../utils/response.js";
import { createFollowupservice, addLogservice,getFollowupsservice } from "./followup.service.js";

export const createFollowup = async (req, res, next) => {
  try {
    const result = await createFollowupservice(req.body);
    success(res, result, "Followup Created");
  } catch (err) {
    next(err);
  }
};

export const addLog = async (req, res, next) => {
  try {
    const result = await addLogservice(req.body);
    success(res, result, "Log Added");
  } catch (err) {
    next(err);
  }
};

export const getFollowups = async (req, res, next) => {
  try {
    const data = await getFollowupsservice();
    success(res, data);
  } catch (err) {
    next(err);
  }
};