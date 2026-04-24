export const createBatchquery = `
INSERT INTO batches (course_id, trainer_id, start_date, end_date, timing)
VALUES (?, ?, ?, ?, ?)
`;

export const getBatchquery = `
SELECT b.*, c.name as course_name
FROM batches b
JOIN courses c ON b.course_id = c.id
`;