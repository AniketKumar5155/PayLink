const { z } = require('zod');

const resetPasswordSchema = z.object({
    email: z.string({
        error: (issue) => {
            if (issue.input === undefined) return 'Email is required';
            if (issue.code === 'invalid_type') return 'Email must be a string';
        }
    })
    .email('Invalid email format')
    .max(100, 'Email cannot exceed 100 characters'),
    otp: z.string({
        error: (issue) => {
            if (issue.input === undefined) return 'OTP is required';
            if (issue.code === 'invalid_type') return 'OTP must be a string';
        }
    })
    .length(6, 'OTP must be 6 digits'),
    password: z.string({
        error: (issue) => {
            if (issue.input === undefined) return 'Password is required';
            if (issue.code === 'invalid_type') return 'Password must be a string';
        }
    })
    .min(8, 'Password must be at least 8 characters long')
    .max(100, 'Password cannot exceed 100 characters'),
}, {
    message: 'Invalid input data',
});

module.exports = resetPasswordSchema;
