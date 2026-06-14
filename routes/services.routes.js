const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const validatorMiddleware = require('../middlewares/validator.middleware');
const createServiceSchema = require('../schemas/services/service.schema');
const { login, verifyAuth } = require('../controllers/auth.controller');
const { createServiceController, updateServiceController, getServiceController } = require('../controllers/service.controller');
const updateServiceSchema = require('../schemas/services/update.service.schema');

router.post('/services', validatorMiddleware(createServiceSchema), createServiceController);
router.put('/services/:serviceId', validatorMiddleware(updateServiceSchema), updateServiceController);
router.get('/services/:serviceId', getServiceController);

module.exports = router;