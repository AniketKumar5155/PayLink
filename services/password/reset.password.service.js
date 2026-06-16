const AppError = require("../../custom_classes/AppError.custom_class");
const { User } = require("../../models");
const hashPassword = require("../../utils/bcrypt/hash.bcrypt.util");
const generateOtp = require("../../utils/otp/generate_otp.otp.util");
const { sendOtpToEmail, storeOtpInDb, verifyOtp } = require("../otp/send.otp.service");

const sendResetPasswordOtpService = async ({ email }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new AppError('User not found', 404);

    const { otp, expiresAt } = await generateOtp();
    await sendOtpToEmail(otp, email);
    await storeOtpInDb(otp, email, expiresAt);

    return { email };
};

const resetPasswordService = async ({ email, otp, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new AppError('User not found', 404);

    await verifyOtp(otp, email);

    const hashedPassword = await hashPassword(password);
    await user.update({ password: hashedPassword });

    return { id: user.id, email: user.email };
};

module.exports = {
    sendResetPasswordOtpService,
    resetPasswordService,
};
