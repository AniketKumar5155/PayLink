const bcrypt = require('bcryptjs');

module.exports = (data) => bcrypt.hash(data, Number(process.env.SALT_ROUNDS) || 10);