require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const cors = require('cors')
const corsOption = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3500

connectDB();

app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/templates', require('./routes/shiftTemplateRoutes'))
app.use('/shifts', require('./routes/shiftRoutes'))
app.use('/personal', require('./routes/personalRoutes'))

mongoose.connection.once('open', ()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log('Server is running on port '+PORT))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})