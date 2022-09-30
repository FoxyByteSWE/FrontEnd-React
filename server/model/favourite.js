const { query, promiseQuery } = require('./database/connection');

const userFavIds = (userId, cb) => {
    query(`
        SELECT favorite.id, favorite.place_id, favorite.date_created,
        restaurants.Nome, restaurants.Categoria, restaurants.Indirizzo, restaurants.Sito, restaurants.Immagine, restaurants.Codice_pk
        FROM favorite inner join restaurants on restaurants.Codice_pk = favorite.place_id
        where favorite.user_id=?
        `,[userId], cb);
}

const addFav = (userId, placeId, cb) => {
    query("INSERT INTO favorite (user_id, place_id) values (?,?)",[userId, placeId], err => {
        if (err) return cb(err);
        userFavIds(userId, cb)
    });
}

const removeFav = (userId, placeId, cb) => {
    query("DELETE from favorite where user_id=? AND place_id=?",[userId, placeId], err => {
        if (err) return cb(err);
        userFavIds(userId, cb)
    });
}

const deleteFavIds = (userId, cb) => {
    query("DELETE FROM favorite WHERE user_id=?",
    [userId],
	err => {
        if (err) {
            console.log(err.message);
            return cb(err);
        }
    }
    );
}

module.exports = {
    userFavIds,
    removeFav,
    addFav,
    deleteFavIds
}