const AppError = require("../../custom_classes/AppError.custom_class");
const { Service } = require("../../models");

const getServiceService = async ({
    serviceId,
    userId,
}) => {
    const service = await Service.findOne({ where: { id: serviceId, userId } });
    if (!service) throw new AppError('Service not found', 404);
    return service;
}

module.exports = getServiceService;