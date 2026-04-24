import { createLeadservice,getLeadsservice } from "./leads.service.js";
import { success } from "../../../utils/response.js";

export  const createLead = async (req, res, next) => {
  try {
    const result = await createLeadservice(req.body);
    success(res, result, "Lead Created");
  } catch (err) {
    next(err);
  }
};

export const getLeads = async (req, res, next) => {
  try {
    const data = await getLeadsservice();
    success(res, data);
  } catch (err) {
    next(err);
  }
};