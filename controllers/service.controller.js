const createServiceService = require('../services/services/create.services.service');
const updateServiceService = require('../services/services/update.services.service');
const getServiceService = require('../services/services/get.services.service');

exports.createServiceController = async (req, res, next) => {
    try{
        const { name, description, price } = req.body;
        const userId = req.user.id;
        const service = await createServiceService({ name, description, price, userId });
        res.status(201).json({ 
            success: true,
            message: "Service created successfully",
            data: service 
        });
    } catch (error) {
        next(error);
    }
}

exports.updateServiceController = async (req, res, next) => {
    try{
        const { serviceId } = req.params;
        const data = req.body;
        const userId = req.user.id;
        const service = await updateServiceService({ serviceId, data, userId });
        res.status(200).json({ 
            success: true,
            message: "Service updated successfully",
            data: service 
        });
    } catch (error) {
        next(error);
    }
}
 
exports.getServiceController = async (req, res, next) => {
    try{
        const { serviceId } = req.params;
        const userId = req.user.id;
        const service = await getServiceService({ serviceId, userId });
        res.status(200).json({
            success: true,
            message: "Service retrieved successfully",
            data: service
        });
    } catch (error) {
        next(error);
    }
}
