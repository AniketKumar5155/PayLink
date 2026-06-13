const jwt = require('jsonwebtoken');

const createToken = (user, expiresIn = '12h') => {
    const token = jwt.sign(
        { 
            id: user.id, 
            first_name: user.first_name, 
            middle_name: user.middle_name,
            last_name: user.last_name, 
            email: user.email 
        },
        process.env.JWT_SECRET,
        { expiresIn }
    );
    return token;
};

module.exports = createToken;