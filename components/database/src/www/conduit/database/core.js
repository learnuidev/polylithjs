const postgres = require('postgres');
const schema = require('./schema').schema

const createConduit = async (sql) => {
    await schema.dropDb(sql)
    await schema.createDb(sql)
    await schema.seedDb(sql)
}

const dropTable = async (sql, { name }) => {
    await sql`DROP table ${name} `
}

const db = (config) => {
    const sql = postgres(`postgres://username@host:port/database`, {
        username: 'vishalgautam',
        host: 'localhost',
        port: 5432,
        database: 'conduit_dev'
    })

    console.log("gets called")

    createConduit(sql)

    return sql;
}


exports.db = db;
exports.dropTable = dropTable;
exports.createConduit = createConduit;
