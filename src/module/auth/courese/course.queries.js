export const createCoursequery = `
INSERT INTO courses (name) VALUES (?)
`;

export const getCoursesquery = `SELECT * FROM courses`;