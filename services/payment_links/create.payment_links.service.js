const crypto = require('crypto');
const AppError = require("../../custom_classes/AppError.custom_class");
const { PaymentLink, Service } = require("../../models");

const createPaymentLinkService = async ({
    name,
    description,
    amount,
    phone,
    type,
    tenure_months,
    status,
    userId,
}) => {
    const service = await Service.create({
        name,
        description,
        amount,
        phone,
        type,
        tenure_months: type === 'LOAN' ? tenure_months : null,
        status,
        user_id: userId
    });

    if (!service) throw new AppError('Failed to create service', 500);

    const token = crypto.randomBytes(18).toString('hex');
    const paymentLink = await PaymentLink.create({
        payment_link: `/pay/${token}`,
        expiry_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        status: status === 'PAID' ? 'PAID' : 'PENDING',
        service_id: service.id,
    });

    if (!paymentLink) throw new AppError('Failed to create payment link', 500);

    return {
        ...paymentLink.toJSON(),
        service,
    };
};

module.exports = createPaymentLinkService;
