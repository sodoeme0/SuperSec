const express = require('express')
const router = express.Router()
const personalController = require('../controllers/personalController')

router.route('/')
    .get(personalController.getAllPersonal)
    .post(personalController.addNewPersonal)
    .patch(personalController.updatePersonal)
    .delete(personalController.deletePersonal)

    router.get('/:id', personalController.getPersonal)



module.exports = router