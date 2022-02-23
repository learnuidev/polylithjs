const postgres = require('postgres');

const dropTable = async (sql, { name }) => {
    await sql`DROP table ${name}`
}

const db = (config) => {
    const sql = postgres(`postgres://username@host:port/database`, {
        username: 'vishalgautam',
        host: 'localhost',
        port: 5432,
        database: 'conduit_dev'
    })

    return sql;
}


exports.db = db;
exports.dropTable = dropTable;
