const jwt = require('jsonwebtoken');

const createToken = (user, expiresIn = '12h') => {
    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn }
    );
    return token;
};

module.exports = createToken;