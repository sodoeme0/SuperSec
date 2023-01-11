const ShiftTemplate = require('../models/shiftTemplate')


// @desc Get all shiftTemplates
// @route GET /shiftTemplates
// @access Private

exports.getAllTemplates = async (req, res) => {
    // Get all templates from DB
    const shiftTemplates = await ShiftTemplate.find()

    // If no templates
    if (!shiftTemplates.length) {
        return res.status(400).json({ message: "No templates found" })
    }

    res.json(shiftTemplates)

}

// @desc Get one shift template
// @route GET /shifts/:id
// @access Private

exports.getTemplate = async (req, res) => {
    // Get a shift template from DB
    let id = req.params.id
      console.log(id)
    const shiftTemplate = await ShiftTemplate.findById(id)
  

    // If no shift templates
    if (!shiftTemplate) {
        return res.status(400).json({ message: "Shift template not found" })
    }

    res.json(shiftTemplate)

}

// @desc add new shiftTemplate
// @route POST /shiftTemplates
// @access Private

exports.addNewTemplate = async (req, res) => {

    let shiftTemplate = new ShiftTemplate(req.body)
    shiftTemplate.location.street = req.body.street
    shiftTemplate.location.city = req.body.city
    shiftTemplate.location.zip = req.body.zip
    shiftTemplate.location.state = req.body.state
    console.log(req.body)

    // confirm data
    if (!shiftTemplate.name || !shiftTemplate.directions || !shiftTemplate.armed || !shiftTemplate.location.street || 
        !shiftTemplate.location.city || !shiftTemplate.location.zip || !shiftTemplate.location.state) {
        return res.status(400).json({ message: "All field are required" })
    }

    const status = await ShiftTemplate.create(shiftTemplate)
    if (status) {
        res.status(201).json({ message: `The shift template ${shiftTemplate.name} has been created successfully` })
    } else {
        res.status(400).json({ message: 'Invalid data recived' })
    }
}

// @desc Patch shiftTemplate
// @route PATCH /shiftTemplates
// @access Private

exports.updateTemplate = async (req, res) => {
    const shiftTemplate = new ShiftTemplate(req.body)   
    console.log(shiftTemplate.armed)
    // confirm data
    if (!shiftTemplate.id ||(!shiftTemplate.name && !shiftTemplate.directions && shiftTemplate.armed === undefined && !shiftTemplate.location.street 
        && !shiftTemplate.location.city && !shiftTemplate.location.zip && !shiftTemplate.location.state)) {
        return res.status(400).json({ message: "One field is required" })
    }

    // confirm template exists
    const foundShiftTemplate = await ShiftTemplate.findById(shiftTemplate.id)

    if(!foundShiftTemplate){
        return res.status(400).json({message: "Shift Template not found"})
    }

   
    
    const updatedShiftTemplate = await foundShiftTemplate.update(shiftTemplate)

    if (updatedShiftTemplate) { //created 
        res.status(201).json({ message: ` Shift template ${shiftTemplate.name} updated` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
}

// @desc Delete ShiftTemplate
// @route DELETE /shiftTemplates
// @access Private

exports.deleteTemplate = async (req, res) => {
    
    const shiftTemplate = new ShiftTemplate(req.body)   

    // Confirm data
    if (!shiftTemplate.id) {
        return res.status(400).json({ message: 'User ID Required' })
    }


    // confirm template exists
    const isShiftTemplate = await ShiftTemplate.findById(shiftTemplate.id)

    if(!isShiftTemplate){
        return res.status(400).json({message: 'The shift template does not exist'})
    }

    const status = shiftTemplate.deleteOne()

    if(status){
        res.status(201).json({message: `The shift template ${isShiftTemplate.name} has been deleted`})
    }else{
        res.status(400).json({message: `Invalid user data`})
    }

}