const AppError = require("../../custom_classes/AppError.custom_class");
const { User } = require("../../models");
const comparePassword = require("../../utils/bcrypt/compare.bcrypt.util");
const hashPassword = require("../../utils/bcrypt/hash.bcrypt.util");

const changePasswordService = async ({ userId, currentPassword, newPassword }) => {
    const user = await User.findByPk(userId);
    if (!user) throw new AppError('User not found', 404);

    const isPasswordValid = await comparePassword(currentPassword, user.password);
    if (!isPasswordValid) throw new AppError('Current password is incorrect', 401);

    const hashedPassword = await hashPassword(newPassword);
    await user.update({ password: hashedPassword });

    return { id: user.id, email: user.email };
};

module.exports = changePasswordService;
