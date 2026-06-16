const createServiceService = require('../services/services/create.services.service');
const updateServiceService = require('../services/services/update.services.service');
const getServiceService = require('../services/services/get.services.service');
const getAllServicesService = require('../services/services/get.all.services.service');

exports.createServiceController = async (req, res) => {
        const { name, description, amount, tenure_months, phone, type, isGeneratePaymentLink, status } = req.body;
        const userId = req.user.id;
        const service = await createServiceService({ name, description, amount, tenure_months, phone, type, isGeneratePaymentLink, status, userId });
        res.status(201).json({ 
            success: true,
            message: "Service created successfully",
            data: service 
        });
}

exports.updateServiceController = async (req, res) => {
        const { serviceId } = req.params;
        const data = req.body;
        const userId = req.user.id;
        const service = await updateServiceService({ serviceId, data, userId });
        res.status(200).json({ 
            success: true,
            message: "Service updated successfully",
            data: service 
        });
}

exports.getServiceController = async (req, res) => {
        const { serviceId } = req.params;
        const userId = req.user.id;
        const service = await getServiceService({ serviceId, userId });
        res.status(200).json({
            success: true,
            message: "Service retrieved successfully",
            data: service
        });
}

exports.getAllServicesController = async (req, res) => {
    const userId = req.user.id;
    const services = await getAllServicesService({ userId });
    res.status(200).json({
        success: true,
        message: "Services retrieved successfully",
        data: services
    });
}