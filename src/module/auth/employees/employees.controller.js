import { createEmployeeService,getEmployeesService } from "./employee.service.js";
import { success } from "../../../utils/response.js";

export const createEmployee = async (req, res, next) => {
  try {
    const result = await createEmployeeService(req.body);
    success(res, result, "Employee Created");
  } catch (err) {
    next(err);
  }
};

export const getEmployees = async (req, res, next) => {
  try {
    const data = await getEmployeesService();
    success(res, data);
  } catch (err) {
    next(err);
  }
};