const AppError = require("../../custom_classes/AppError.custom_class");
const { Service } = require("../../models");

const createServiceService = async ({
    name,
    description,
    amount,
    phone,
    type,
    tenure_months,
    isGeneratePaymentLink,
    status,
    userId
}) => {
    const service = await Service.create({
        name,
        description,
        amount,
        phone,
        type,
        tenure_months: type === 'LOAN' ? tenure_months : null,
        isGeneratePaymentLink,
        status,
        user_id: userId
    });
    // if(isGeneratePaymentLink){
        // Generate payment link logic here using razorpay and add it to the paymentLink database
    // }
    if (!service) throw new AppError('Failed to create service', 500);
    return service;
}

module.exports = createServiceService;
