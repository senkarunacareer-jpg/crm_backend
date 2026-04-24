export const createEmployeeQuery = `
INSERT INTO employees (name, role, joining_date, reporting_to)
VALUES (?, ?, ?, ?)
`;

export const getEmployeesQuery = `SELECT * FROM employees`;

export const getEmployeeByIdQuery = `
SELECT * FROM employees WHERE id = ?
`;