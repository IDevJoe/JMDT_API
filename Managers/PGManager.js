const {Pool} = require('pg');
let pool;
const config = require('../config.json');

module.exports.connect = function() {
    pool = new Pool(config.postgres);
};
module.exports.pool = pool;
