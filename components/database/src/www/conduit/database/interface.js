const core = require('./core');

const db = async (config) => await core.db(config)

exports.db = db;