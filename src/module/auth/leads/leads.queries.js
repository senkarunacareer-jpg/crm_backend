export const createLeadquery = `
INSERT INTO leads (name, phone, email, source, referred_by, assigned_to, status)
VALUES (?, ?, ?, ?, ?, ?, ?)
`;

export const getLeadsquery = `SELECT * FROM leads`;