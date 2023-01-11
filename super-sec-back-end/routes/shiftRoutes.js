const express = require('express')
const router = express.Router()
const shiftController = require('../controllers/shiftController')

router.route('/')
    .get(shiftController.getAllShifts)
    .post(shiftController.addNewShift)
    .patch(shiftController.updateShift)
    .delete(shiftController.deleteShift)

router.get('/:id', shiftController.getShift)



module.exports = router