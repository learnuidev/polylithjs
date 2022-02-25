const schema = require('./schema');

const createEventLog = async (sql) => {
    await schema.createEventLog(sql)
}

const resetEventLog = async sql => {
    await schema.resetEventLog(sql)
}

const dropEventLog = async sql => {
    await schema.dropEventLog(sql)
}

exports.createEventLog = createEventLog;
exports.dropEventLog = dropEventLog;
exports.resetEventLog = resetEventLog;