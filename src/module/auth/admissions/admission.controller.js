import { success } from "../../../utils/response.js";
import { createAdmissionservice,getAdmissionsservice } from "./admission.service.js";

export const createAdmission = async (req, res, next) => {
  try {
    const result = await createAdmissionservice(req.body);
    success(res, result, "Admission Created");
  } catch (err) {
    next(err);
  }
};

export const getAdmissions = async (req, res, next) => {
  try {
    const data = await getAdmissionsservice();
    success(res, data);
  } catch (err) {
    next(err);
  }
};