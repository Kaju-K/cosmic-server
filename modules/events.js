const {db} = require('../config/db.js')

const getAllEvents = () => {
    return db('events')
            .select('id', 'event', 'time', 'fk_month_id', 'fk_day')
}

const getEventByMonth = (month_id) => {
    return db('events')
            .select('id', 'event', 'time', 'fk_month_id', 'fk_day')
            .where({fk_month_id: month_id})
}

module.exports = {
    getAllEvents,
    getEventByMonth
}
