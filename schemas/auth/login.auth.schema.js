const z = require('zod');

const loginSchema = z.object({
    email: z.string({
        error: (issue) => {
            if (issue.input === undefined) return 'Email is required';
            if (issue.code === 'invalid_type') return 'Email must be a string';
        }
    })
    .email('Invalid email format')
    .min(1, 'Email cannot be empty')
    .max(100, 'Email cannot exceed 100 characters'),
    password: z.string({
        error: (issue) => {
            if (issue.input === undefined) return 'Password is required';
            if (issue.code === 'invalid_type') return 'Password must be a string';
        }
    })
    .min(8, 'Password must be at least 8 characters long')
    .max(100, 'Password cannot exceed 100 characters'),
}, {
    message : 'Invalid input data',
});

module.exports = loginSchema;