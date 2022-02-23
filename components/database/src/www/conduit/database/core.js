const postgres = require('postgres');

const db = (config) => {
    const sql = postgres(`postgres://username@host:port/database`, {
        username: 'vishalgautam',
        host: 'locahost',
        port: 5432,
        database: 'conduit_dev'
    })

    console.log("SQL", sql);
    return sql
    // return postgres(config)
}


exports.db = db;
