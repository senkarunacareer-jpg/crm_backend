import { success } from "../../../utils/response.js";
import { createLessonService, createSubjectService, createTestService } from "./lms.services.js";


export const createSubject = async (req, res, next) => {
  try {
    const result = await createSubjectService(req.body);
    success(res, result);
  } catch (err) {
    next(err);
  }
};

export const createLesson = async (req, res, next) => {
  try {
    const result = await createLessonService(req.body);
    success(res, result);
  } catch (err) {
    next(err);
  }
};

export const createTest = async (req, res, next) => {
  try {
    const result = await createTestService(req.body);
    success(res, result);
  } catch (err) {
    next(err);
  }
};