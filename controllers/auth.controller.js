const loginService = require("../services/auth/login.auth.service");
const createToken = require("../utils/jwt/create_token.jwt.util");

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await loginService({ email, password });
    const token = createToken(user);
    res.status(200).json({ success: true, token });
}

const verifyAuth = async (req, res) => {
    res.status(200).json({ success: true, data: req.user });
}

module.exports = {
    login,
    verifyAuth
}