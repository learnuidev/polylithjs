const database = require('../../../../../database/src/www/conduit/database/interface');


const db = database.db()

const browseArticles = async () => {
    // console.log("DB", db);
    return await db`select * from mySchema.users`
    // return [

    //     {
    //         id: 'article-1',
    //         title: "Learning Polylith",
    //         foo: "bar"
    //     },
    //     {
    //         id: 'article-2',
    //         title: "Learning Polylith Architecture",
    //         table: db
    //     },
    // ]
}

exports.browseArticles = browseArticles;