const { z } = require('zod');

const createServiceSchema = z.object({
    name: z.string({
        error: (issue) => {
            if (issue.input === undefined) return 'Name is required';
            if (issue.code === 'invalid_type') return 'Name must be a string';
        }
    })
    .min(1, 'Name cannot be empty')
    .max(100, 'Name cannot exceed 100 characters'),

    description: z.string({
        error: (issue) => {
            if (issue.input === undefined) return 'Description is required';
            if (issue.code === 'invalid_type') return 'Description must be a string';
        }
    })
    .min(1, 'Description cannot be empty')
    .max(500, 'Description cannot exceed 500 characters'),
    
    price: z.number({
        error: (issue) => {
            if (issue.input === undefined) return 'Price is required';
            if (issue.code === 'invalid_type') return 'Price must be a number';
        }
    })
    .min(0, 'Price cannot be negative'),

    isGeneratePaymentLink: z.boolean({
        error: (issue) => {
            if (issue.input === undefined) return 'isGeneratePaymentLink is required';
            if (issue.code === 'invalid_type') return 'isGeneratePaymentLink must be a boolean';
        }
    }),

    // expiresAt: z.string({})
}, {
    message: 'Invalid input data',
});