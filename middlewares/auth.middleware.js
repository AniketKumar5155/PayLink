const jwt = require('jsonwebtoken');
const verifyToken = require('../utils/jwt/verify_token.jwt.util');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new AppError('Unauthorized', 401);
    }
    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
};

module.exports = authMiddleware;