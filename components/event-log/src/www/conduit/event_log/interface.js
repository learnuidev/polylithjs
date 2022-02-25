const core = require('./core');

const createEventLog = async (sql) => {
    console.log("CREATING EVENT LOG")
    await core.createEventLog(sql)
}

const resetEventLog = async sql => {
    await core.resetEventLog(sql)
}

const dropEventLog = async sql => {
    await core.dropEventLog(sql)
}

exports.createEventLog = createEventLog;
exports.resetEventLog = resetEventLog;
exports.dropEventLog = dropEventLog;