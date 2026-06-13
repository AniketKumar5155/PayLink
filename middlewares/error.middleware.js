const jwt = require('jsonwebtoken');
const z = require('zod');
const AppError = require('../custom_classes/AppError.custom_class');

const errorMiddleware = (err, req, res, next) => {
    console.error(err);
    let statusCode = 500;
    let message = 'Internal Server Error';
    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
    } else if (err instanceof z.ZodError) {
        statusCode = 400;
        const issues = err.issues;
        const firstIssueMessage = issues[0].message;
        message = firstIssueMessage;
    } else if (err instanceof Sequelize.ValidationError) {
        statusCode = 400;
        message = err.message || 'Bad Request';
    } else if (err instanceof jwt.JsonWebTokenError) {
        statusCode = 401;
        message = err.message || 'Unauthorized';
    }
    res.status(statusCode).json({ success: false, message });
};

module.exports = errorMiddleware;