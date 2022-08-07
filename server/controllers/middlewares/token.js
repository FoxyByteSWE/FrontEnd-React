const jwt = require('jsonwebtoken');
const tokenSecret = 'it is a secret token 135631';
/**
 * store data in token return token
 * @param {object} data object of data to be stored in token
 * @returns token
 */
function createToken (data) {
  return jwt.sign(data, tokenSecret);
}
module.exports = {
  createToken
};