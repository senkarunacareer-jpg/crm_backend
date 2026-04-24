export const createFollowupquery = `
INSERT INTO followups (lead_id, followup_date)
VALUES (?, ?)
`;

export const addLogquery = `
INSERT INTO followup_logs (followup_id, conversation)
VALUES (?, ?)
`;

export const getFollowupsquery = `
SELECT * FROM followups
`;