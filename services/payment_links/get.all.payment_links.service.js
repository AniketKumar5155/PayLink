const { PaymentLink, Service } = require("../../models");

const getAllPaymentLinksService = async ({ userId }) => {
    const paymentLinks = await PaymentLink.findAll({
        include: [
            {
                model: Service,
                as: 'service',
                where: { user_id: userId },
            }
        ],
        order: [['created_at', 'DESC']],
    });

    return paymentLinks;
};

module.exports = getAllPaymentLinksService;
