const crypto = require('crypto');

const generateOtp = async (email) => {
        const otp = crypto.randomInt(100000, 1000000).toString().padStart(6, '0');
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
        return { otp, expiresAt };
};

module.exports = generateOtp;