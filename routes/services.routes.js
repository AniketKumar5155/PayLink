const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const validatorMiddleware = require('../middlewares/validator.middleware');
const { login, verifyAuth } = require('../controllers/auth.controller');
const { createServiceController, updateServiceController, getServiceController, getAllServicesController } = require('../controllers/service.controller');
const createServiceSchema = require('../schemas/services/create.services.schema');
const updateServiceSchema = require('../schemas/services/update.services.schema');

router.post('/services', authMiddleware, validatorMiddleware(createServiceSchema), createServiceController);
router.put('/services/:serviceId', authMiddleware, validatorMiddleware(updateServiceSchema), updateServiceController);
router.get('/services/:serviceId', authMiddleware, getServiceController);
router.get('/services', authMiddleware, getAllServicesController);

module.exports = router;