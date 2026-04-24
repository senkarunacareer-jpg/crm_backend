import { success } from "../../../utils/response.js";
import { createPaymentservice,getPaymentsservice } from "./payment.services.js";

export const createPayment = async (req, res, next) => {
  try {
    const result = await createPaymentservice(req.body);
    success(res, result, "Payment Done");
  } catch (err) {
    next(err);
  }
};

export const getPayments = async (req, res, next) => {
  try {
    const data = await getPaymentsservice();
    success(res, data);
  } catch (err) {
    next(err);
  }
};