const database = require('../../../../../database/src/www/conduit/database/interface');

const browseArticles = async () => {
    const db = await database.db()
    return await db`select * from conduit.article`

}

exports.browseArticles = browseArticles;