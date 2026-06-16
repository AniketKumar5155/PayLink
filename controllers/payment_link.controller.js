const createPaymentLinkService = require('../services/payment_links/create.payment_links.service');
const getAllPaymentLinksService = require('../services/payment_links/get.all.payment_links.service');
const getPaymentLinkService = require('../services/payment_links/get.payment_links.service');
const getPublicPaymentLinkService = require('../services/payment_links/get.public.payment_links.service');

exports.createPaymentLinkController = async (req, res) => {
    const { name, description, amount, tenure_months, phone, type, status } = req.body;
    const userId = req.user.id;
    const paymentLink = await createPaymentLinkService({
        name,
        description,
        amount,
        tenure_months,
        phone,
        type,
        status,
        userId
    });

    res.status(201).json({
        success: true,
        message: "Payment link generated successfully",
        data: paymentLink
    });
};

exports.getAllPaymentLinksController = async (req, res) => {
    const userId = req.user.id;
    const paymentLinks = await getAllPaymentLinksService({ userId });

    res.status(200).json({
        success: true,
        message: "Payment links retrieved successfully",
        data: paymentLinks
    });
};

exports.getPaymentLinkController = async (req, res) => {
    const { paymentLinkId } = req.params;
    const userId = req.user.id;
    const paymentLink = await getPaymentLinkService({ paymentLinkId, userId });

    res.status(200).json({
        success: true,
        message: "Payment link retrieved successfully",
        data: paymentLink
    });
};

exports.getPublicPaymentLinkController = async (req, res) => {
    const { token } = req.params;
    const paymentLink = await getPublicPaymentLinkService({ token });

    res.status(200).json({
        success: true,
        message: "Payment link retrieved successfully",
        data: paymentLink
    });
};
