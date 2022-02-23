const core = require('./core');

const db = (config) => core.db(config)

exports.db = db;