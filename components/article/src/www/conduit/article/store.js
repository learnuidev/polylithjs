const database = require('../../../../../database/src/www/conduit/database/interface');


// caching in order t
let db;

const browseArticles = async () => {
    // if (!db) {
    console.log("GETS CALLED")
    db = database.db()
    // }

    // console.log("DB", db);
    // return await db`select * from mySchema.users`
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