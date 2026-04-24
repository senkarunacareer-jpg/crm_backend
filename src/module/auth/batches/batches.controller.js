import { createbatchservice,getBatchservice } from "./batches.service.js";
import { success } from "../../../utils/response.js";

export  const createBatch = async (req, res, next) => {
  try {
    const result = await createbatchservice(req.body);
    success(res, result, "Batch Created");
  } catch (err) {
    next(err);
  }
};

export const getBatches = async (req, res, next) => {
  try {
    const data = await getBatchservice();
    success(res, data);
  } catch (err) {
    next(err);
  }
};