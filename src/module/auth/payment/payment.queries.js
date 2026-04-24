export const createPaymentQuery = `
INSERT INTO payments (admission_id, amount, payment_mode)
VALUES (?, ?, ?)
`;

export const getPaymentsQuery = `
SELECT * FROM payments
`;