const Shift = require('../models/shift')
const Personal = require('../models/personal')
const ShiftTemplate = require('../models/shiftTemplate')

// @desc Get all shifts
// @route GET /shifts
// @access Private

exports.getAllShifts = async (req, res) => {
    // Get all shifts from DB
    const shifts = await Shift.find()

    // If no shifts
    if (!shifts.length) {
        return res.status(400).json({ message: "No shifts found" })
    }

    res.json(shifts)

}

// @desc Get one shift
// @route GET /shifts/:id
// @access Private

exports.getShift = async (req, res) => {
    // Get all shift from DB
    let id = req.params.id
      console.log(id)
    const shift = await Shift.findById(id)
  

    // If no shifts
    if (!shift) {
        return res.status(400).json({ message: "Shift not found" })
    }

    res.json(shift)

}

// @desc add new shift
// @route POST /shifts
// @access Private

exports.addNewShift = async (req, res) => {
    
    let shift = new Shift(req.body)
 
    console.log(req.body)

    // confirm shift data
    if (!shift.start || !shift.end || !shift.template || !shift.personal) {
        return res.status(400).json({ message: "All field are required" })
    }

    //confirm template exists
    const isTemplate = await ShiftTemplate.findById(shift.template)
    if(!isTemplate){
        return res.status(400).json({message: "Shift Template not found"})

    }

    //confirm personal exists
    const isPersonal = await Personal.findById(shift.personal)
    if(!isPersonal){
        return res.status(400).json({message: "Personal not found"})

    }

    //confirm personal is active
    if(isPersonal.active == 0){
        return res.status(400).json({message: "Personal not active"})

    }

    //confirm if personal is elligible for shift
    if(isTemplate.armed == 1 && isPersonal.armed ==0){
        return res.status(400).json({message: `This shift requires an armed personal ${isPersonal.name} is unarmed`})

    }

     

    const status = await Shift.create(shift)
    if (status) {
        res.status(201).json({ message: `The shift has been created successfully` })
    } else {
        res.status(400).json({ message: 'Invalid data recived' })
    }
}

// @desc Patch shift
// @route PATCH /shifts
// @access Private

exports.updateShift = async (req, res) => {
    let shift = new Shift(req.body)   
    console.log(req.body)

    // confirm data
    if (!shift.id ||(!shift.start && !shift.end && !shift.active && !shift.template&& !shift.personal)) {
        return res.status(400).json({ message: "One field is required" })
    }

    // confirm shift exists
    const isShift = await Shift.findById(shift.id)

    if(!isShift){
        return res.status(400).json({message: "Shift  not found"})
    }

        
        
    
    const updatedShift = await isShift.update(shift)

    if (updatedShift) { //created 
        res.status(201).json({ message: ` Shift  updated` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
}

// @desc Delete shift
// @route DELETE /shifts
// @access Private

exports.deleteShift = async (req, res) => {
    
    let shift = new Shift(req.body)   

    // Confirm data
    if (!shift.id) {
        return res.status(400).json({ message: 'User ID Required' })
    }


    // confirm shift exists
    const isShift = await Shift.findById(shift.id)

    if(!isShift){
        return res.status(400).json({message: 'The shift shift does not exist'})
    }

    const status = isShift.deleteOne()

    if(status){
        res.status(201).json({message: `The shift has been deleted`})
    }else{
        res.status(400).json({message: `Invalid user data`})
    }

}