const { query, promiseQuery } = require('./database/connection');
// cb (err, result)
const restaurantsList = cb => {
    query("SELECT * FROM restaurants", cb);
}

const topRetaurantsList = cb => {
    query("SELECT * FROM restaurants ORDER BY Ranking DESC LIMIT 3", cb);
}

module.exports = { restaurantsList, topRetaurantsList }