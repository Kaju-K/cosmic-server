const express = require('express')
const router = express.Router()

const {
    _getAllEvents,
    _getEventByMonth
} = require('../controllers/events.js')

router.get('/api/events', _getAllEvents)
router.get('/api/events/:month', _getEventByMonth)

module.exports = {
    router
}
