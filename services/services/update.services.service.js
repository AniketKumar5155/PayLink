const AppError = require("../../custom_classes/AppError.custom_class");
const { Service } = require("../../models");

const updateServiceService = async ({
    serviceId,
    data,
    userId,
}) => {
    const allowedFields = ['name', 'description', 'price'];
    const updateData = {};
    for (const field of allowedFields) {
        if (data[field] !== undefined) {
            updateData[field] = data[field];
        }
    }
    const service = await Service.findOne({ where: { id: serviceId, userId } });
    if (!service) throw new AppError('Service not found', 404);
    await service.update(updateData);
    return service;
}

module.exports = updateServiceService;