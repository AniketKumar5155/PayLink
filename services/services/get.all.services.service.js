const AppError = require("../../custom_classes/AppError.custom_class");
const { Service } = require("../../models");

const getAllServicesService = async ({ userId }) => {
    const services = await Service.findAll({
        where: { user_id: userId },
        order: [['created_at', 'DESC']]
    });
    return services;
};

module.exports = getAllServicesService;
