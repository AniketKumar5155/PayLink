const validatorMiddleware = (schema) => {
    return (req, res, next) => {
        const data = schema.parse(req.body);
        req.body = data;
        next();
    }
}

module.exports = validatorMiddleware;
