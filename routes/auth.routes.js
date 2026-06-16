const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const validatorMiddleware = require('../middlewares/validator.middleware');
const loginSchema = require('../schemas/auth/login.auth.schema');
const sendResetOtpSchema = require('../schemas/auth/send_reset_otp.auth.schema');
const resetPasswordSchema = require('../schemas/auth/reset_password.auth.schema');
const changePasswordSchema = require('../schemas/auth/change_password.auth.schema');
const {
    login,
    verifyAuth,
    sendResetPasswordOtp,
    resetPassword,
    changePassword
} = require('../controllers/auth.controller');

router.post('/login', validatorMiddleware(loginSchema), login);
router.get('/verify', authMiddleware, verifyAuth);
router.post('/forgot-password/send-otp', validatorMiddleware(sendResetOtpSchema), sendResetPasswordOtp);
router.post('/forgot-password/reset', validatorMiddleware(resetPasswordSchema), resetPassword);
router.post('/send-otp', validatorMiddleware(sendResetOtpSchema), sendResetPasswordOtp);
router.post('/reset-password', validatorMiddleware(resetPasswordSchema), resetPassword);
router.patch('/change-password', authMiddleware, validatorMiddleware(changePasswordSchema), changePassword);

module.exports = router;
