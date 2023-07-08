const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const events_router = require('./routes/events.js')
const months_router = require('./routes/months.js')

const app = express()

dotenv.config()

app.listen(process.env.PORT || 3001, ()=> {
    console.log(`running on port ${process.env.PORT||3001}`)
})

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(events_router.router)
app.use(months_router.router)