const {db} = require('../config/db.js')

const getAllMonths = () => {
    return db('months')
            .select('id', 'month', 'image', 'bubble_time')
}

const getMonth = (month_name) => {
    return db('months')
            .select('id', 'month', 'image', 'bubble_time')
            .where({month: month_name})
}

module.exports = {
    getAllMonths,
    getMonth
}
