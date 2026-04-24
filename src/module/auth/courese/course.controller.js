import { createCourseservice,getCoursesservice } from "./course.service.js";
import { success } from "../../../utils/response.js";

export const createCourse = async (req, res, next) => {
  try {
    const result = await createCourseservice(req.body);
    success(res, result, "Course Created");
  } catch (err) {
    next(err);
  }
};

export const getCourses = async (req, res, next) => {
  try {
    const data = await getCoursesservice();
    success(res, data);
  } catch (err) {
    next(err);
  }
};