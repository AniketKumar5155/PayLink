const loginService = require("../services/auth/login.auth.service");
const changePasswordService = require("../services/password/change.password.service");
const {
    sendResetPasswordOtpService,
    resetPasswordService,
} = require("../services/password/reset.password.service");
const createToken = require("../utils/jwt/create_token.jwt.util");

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await loginService({ email, password });
    const token = createToken(user);
    res.status(200).json({ 
        success: true,
        token,
        userData: {
            id: user.id,
        }
     });
}

const verifyAuth = async (req, res) => {
    res.status(200).json({ success: true, data: req.user });
}

const sendResetPasswordOtp = async (req, res) => {
    const { email } = req.body;
    await sendResetPasswordOtpService({ email });
    res.status(200).json({
        success: true,
        message: "OTP sent successfully",
    });
}

const resetPassword = async (req, res) => {
    const { email, otp, password } = req.body;
    const user = await resetPasswordService({ email, otp, password });
    res.status(200).json({
        success: true,
        message: "Password reset successfully",
        data: user,
    });
}

const changePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const user = await changePasswordService({
        userId: req.user.id,
        currentPassword,
        newPassword,
    });
    res.status(200).json({
        success: true,
        message: "Password changed successfully",
        data: user,
    });
}

module.exports = {
    login,
    verifyAuth,
    sendResetPasswordOtp,
    resetPassword,
    changePassword,
}
