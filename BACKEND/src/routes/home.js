const router = require('express').Router();
const homeController = require('../controllers/homeController');
const getCompany = require('../middleware/home/getCompany');
const createCollaborator = require('../middleware/home/createCollaborator');
router.get('/company/:id', getCompany, homeController.getCompany);
// router.get('/colaborador/:id', getDataSituation, homeController.getColaborador);
router.put('/create_collaborator/', createCollaborator, homeController.createCollaborator)
router.get('/statusEmployee/:id', homeController.getStatusEmployee, homeController.getStatusEmployee);
module.exports = router