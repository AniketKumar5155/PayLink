const AppError = require('../../custom_classes/AppError.custom_class');
const { User } = require('../../models');
const comparePassword = require('../../utils/bcrypt/compare.bcrypt.util');

const loginService = async ({
    email,
    password
}) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new AppError('User not found', 404);
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid)
        throw new AppError('Invalid credentials', 401);
    return user;
}

module.exports = loginService;