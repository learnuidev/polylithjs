const database = require('../../../../../database/src/www/conduit/database/interface');

const browseUsers = async () => {
    const db = await database.db();
    return await db`select * from conduit.user`
}

const getByCredentials = async ({ username, password }) => {
    const db = await database.db();
    return await db`
        SELECT * FROM conduit.user
        WHERE username = ${username} AND password = ${password}
    `
}

exports.browseUsers = browseUsers;
exports.getByCredentials = getByCredentials;