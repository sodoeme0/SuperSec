const express = require('express')
const router = express.Router()
const shiftTemplateController = require('../controllers/shiftTemplateController')

router.route('/')
    .get(shiftTemplateController.getAllTemplates)
    .post(shiftTemplateController.addNewTemplate)
    .patch(shiftTemplateController.updateTemplate)
    .delete(shiftTemplateController.deleteTemplate)


    router.get('/:id', shiftTemplateController.getTemplate)



module.exports = router