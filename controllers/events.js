const {
    getAllEvents,
    getEventByMonth 
} = require('../modules/events.js')

const {
    getMonth
} = require('../modules/months.js')

const _getAllEvents = (req, res) => {
    getAllEvents()
    .then(data => {
        res.json(data)
    })
    .catch(e => {
        res.status(404).json({msg: e.message})
    })
}

const _getEventByMonth = (req, res) => {
    const month_name = req.params.month.toLowerCase()
    getMonth(month_name)
    .then(data => {
        getEventByMonth(data[0].id)
        .then(data => {
            res.json({msg: 'success', data: data})
        })
        .catch(e => {
            res.status(404).json({msg: e.message})
        })
    })
    .catch(e => {
        res.status(404).json({msg: e.message})
    })
}

module.exports = {
    _getAllEvents,
    _getEventByMonth
}
