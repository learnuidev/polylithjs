const postgres = require('postgres');
const eventLog = require('../../../../../event-log/src/www/conduit/event_log/interface')
const schema = require('./schema').schema

const createConduit = async (sql) => {
    await schema.dropDb(sql)
    await schema.createDb(sql)
    await schema.seedDb(sql)
}

const dropTable = async (sql, { name }) => {
    await sql`DROP table ${name} `
}

const db = async (config) => {
    const sql = postgres(`postgres://username@host:port/database`, {
        username: 'vishalgautam',
        host: 'localhost',
        port: 5432,
        database: 'conduit_dev'
    })

    console.log("gets called")

    if (config?.createConduit) {
        await createConduit(sql)
    }

    if (config?.createEventLog) {
        await eventLog.createEventLog(sql)
    }

    await eventLog.dropEventLog(sql)

    return sql;
}


exports.db = db;
exports.dropTable = dropTable;
exports.createConduit = createConduit;
