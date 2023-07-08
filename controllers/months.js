const {
    getAllMonths
} = require('../modules/months.js')

const _getAllMonths = (req, res) => {
    getAllMonths()
    .then(data => {
        res.json(data)
    })
    .catch(e => {
        res.status(404).json({msg: e.message})
    })
}

module.exports = {
    _getAllMonths
}
