export const createSubjectQuery = `
INSERT INTO subjects (course_id, name) VALUES (?, ?)
`;

export const createLessonQuery = `
INSERT INTO lessons (subject_id, title) VALUES (?, ?)
`;

export const createTestQuery = `
INSERT INTO tests (subject_id, title) VALUES (?, ?)
`;