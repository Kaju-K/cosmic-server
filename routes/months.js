const express = require('express')
const router = express.Router()

const {
    _getAllMonths
} = require('../controllers/months.js')

router.get('/api/months', _getAllMonths)

module.exports = {
    router
}
