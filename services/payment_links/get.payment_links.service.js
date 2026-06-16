const AppError = require("../../custom_classes/AppError.custom_class");
const { PaymentLink, Service } = require("../../models");

const getPaymentLinkService = async ({ paymentLinkId, userId }) => {
    const paymentLink = await PaymentLink.findOne({
        where: { id: paymentLinkId },
        include: [
            {
                model: Service,
                as: 'service',
                where: { user_id: userId },
            }
        ],
    });

    if (!paymentLink) throw new AppError('Payment link not found', 404);
    return paymentLink;
};

module.exports = getPaymentLinkService;
