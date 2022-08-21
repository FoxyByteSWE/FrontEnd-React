const { query, promiseQuery } = require('./database/connection');

const search = (s, cb) => {
    query(`
        SELECT * from restaurants
        where
        Nome LIKE '%${s}%'
        OR
        Categoria LIKE '%${s}%'
        OR
        Indirizzo LIKE '%${s}%'
        `, cb);
}

module.exports = {
    search
}