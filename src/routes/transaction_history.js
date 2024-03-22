const { fetchTH } = require('../controllers/transaction_history')

module.exports = (app) => {
    // create a new vehicle-owner
    app.get(
        '/fetch/trans_history',
        fetchTH
    )
}
