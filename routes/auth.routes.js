const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const validatorMiddleware = require('../middlewares/validator.middleware');
const loginSchema = require('../schemas/auth/login.auth.schema');
const { login, verifyAuth } = require('../controllers/auth.controller');

router.post('/login', validatorMiddleware(loginSchema), login);
router.get('/verify', authMiddleware, verifyAuth);

module.exports = router;