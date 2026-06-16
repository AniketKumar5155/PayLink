const { z } = require('zod');

const sendResetOtpSchema = z.object({
    email: z.string({
        error: (issue) => {
            if (issue.input === undefined) return 'Email is required';
            if (issue.code === 'invalid_type') return 'Email must be a string';
        }
    })
    .email('Invalid email format')
    .max(100, 'Email cannot exceed 100 characters'),
}, {
    message: 'Invalid input data',
});

module.exports = sendResetOtpSchema;
