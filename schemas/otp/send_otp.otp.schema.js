const { z } = require('zod');

const sendOtpSchema = z.object({
    email: z.string({
        error: (issue) => {
            if (issue.input === undefined) return 'Email is required';
            if (!z.string().email().safeParse(issue.input).success) return 'Invalid email format';
        }
    }).email()
}, {
    message: 'Invalid input data',
});