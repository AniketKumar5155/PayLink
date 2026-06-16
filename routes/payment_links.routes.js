const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const validatorMiddleware = require('../middlewares/validator.middleware');
const createPaymentLinkSchema = require('../schemas/payment_links/create.payment_links.schema');
const {
    createPaymentLinkController,
    getAllPaymentLinksController,
    getPaymentLinkController,
    getPublicPaymentLinkController,
} = require('../controllers/payment_link.controller');

router.get('/public/:token', getPublicPaymentLinkController);
router.post('/', authMiddleware, validatorMiddleware(createPaymentLinkSchema), createPaymentLinkController);
router.get('/', authMiddleware, getAllPaymentLinksController);
router.get('/:paymentLinkId', authMiddleware, getPaymentLinkController);

module.exports = router;
