const database = require('../../../../../database/src/www/conduit/database/interface');

// caching
let db;

const initDB = () => {
    console.log("GETS CALLED")
    db = database.db();
}

const browseUsers = async () => {
    if (!db) {
        console.log("GETS CALLED")
        db = database.db()
    }

    return await db`select * from mySchema.users`
}

const getByCredentials = async ({ username, password }) => {
    if (!db) {
        console.log("GETS CALLED")
        db = database.db()
    }

    return await db`
        SELECT * FROM mySchema.users
        WHERE username = ${username} AND password = ${password}
    `
}




exports.browseUsers = browseUsers;
exports.getByCredentials = getByCredentials;