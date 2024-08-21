const router = require('express').Router();
const homeController = require('../controllers/homeController');
const getCompany = require('../middleware/home/getCompany');
const createCollaborator = require('../middleware/home/createCollaborator');
const getStatusEmployee = require('../middleware/home/getStatus');
const createTask = require('../middleware/home/createTask');
const completedTask = require('../middleware/home/completedTask');
router.get('/company/:id', getCompany, homeController.getCompany);
// router.get('/colaborador/:id', getDataSituation, homeController.getColaborador);
router.put('/create_collaborator', createCollaborator, homeController.createCollaborator)
router.get('/statusEmployee/:id', getStatusEmployee, homeController.getStatusEmployee);
router.put('/create_taks', createTask, homeController.createTask);
router.put('/completedTask',completedTask, homeController.completedTask);
router.get('/get_task/:id', homeController.getTask)
module.exports = router