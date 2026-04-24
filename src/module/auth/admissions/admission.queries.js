export const createAdmissionquery = `
INSERT INTO admissions (lead_id, student_name, course_id, batch_id)
VALUES (?, ?, ?, ?)
`;

export const getAdmissionsquery = `
SELECT a.*, c.name as course_name
FROM admissions a
JOIN courses c ON a.course_id = c.id
`;