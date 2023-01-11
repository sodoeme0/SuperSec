const Personal = require('../models/personal')
const Shift = require('../models/shift')

const bcrypt = require('bcrypt')


// @desc Get all personals
// @route GET /personals
// @access Private

exports.getAllPersonal = async (req, res) => {
    // Get all personals from DB
    const personals = await Personal.find()

    // If no personals
    if (!personals.length) {
        return res.status(400).json({ message: "No personals found" })
    }

    res.json(personals)

}

exports.getPersonal = async (req, res) => {
    // Get a personal from DB
    let id = req.params.id
      console.log(id)
    const personal = await Personal.findById(id)
  

    // If no shift templates
    if (!personal) {
        return res.status(400).json({ message: "Shift template not found" })
    }

    res.json(personal)

}

// @desc add new personal
// @route POST /personals
// @access Private

exports.addNewPersonal = async (req, res) => {
    
    let personal = new Personal(req.body)
 
    console.log(req.body)

    // confirm personal data
    if (!personal.name || personal.armed === undefined || !personal.phone || !personal.email) {
        return res.status(400).json({ message: "All field are required" })
    }

    

    //confirm duplicate
    const isDuplicate = await Personal.findOne({email : personal.email})
    if(isDuplicate){
        return res.status(400).json({message: "Personal with email already exists"})

    }

    
   

     

    const status = await Personal.create(personal)
    if (status) {
        res.status(201).json({ message: `The personal  ${personal.name} has been created successfully` })
    } else {
        res.status(400).json({ message: 'Invalid data recived' })
    }
}

// @desc Patch personal
// @route PATCH /personals
// @access Private

exports.updatePersonal = async (req, res) => {
    let personal = new Personal(req.body)   

    // confirm data
    if (!personal.id ||(!personal.name && !personal.armed && !personal.active && !personal.phone 
        && !personal.email && !personal.password)) {
        return res.status(400).json({ message: "One field is required" })
    }

    // confirm personal exists
    const isPersonal = await Personal.findById(personal.id)

    if(!isPersonal){
        return res.status(400).json({message: "Personal  not found"})
    }

    if(personal.password){
        personal.password = await bcrypt.hash(personal.password, 10)
    }
        
    
    const updatedPersonal = await isPersonal.updateOne(personal)

    if (updatedPersonal) { //created 
        res.status(201).json({ message: ` Personal  ${isPersonal.name} updated` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
}

// @desc Delete personal
// @route DELETE /personals
// @access Private

exports.deletePersonal = async (req, res) => {
    
    let personal = new Personal(req.body)   

    // Confirm data
    if (!personal.id) {
        return res.status(400).json({ message: 'User ID Required' })
    }


    // confirm personal exists
    const isPersonal = await Personal.findById(personal.id)

    //confirm if any upcoming shifts assigned to personal
    const hasShifts = await Shift.findOne({active: {$lt: 2}, personal: personal.id})

    console.log(hasShifts)

    if(hasShifts){
        return res.status(400).json({message: `Error removing ${isPersonal.name}, has upcomming shifts`})
    }

    const status = isPersonal.deleteOne()

    if(status){
        res.status(201).json({message: `The  personal ${isPersonal.name} has been deleted`})
    }else{
        res.status(400).json({message: `Invalid user data`})
    }

}