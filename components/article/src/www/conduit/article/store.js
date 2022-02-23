const database = require('../../../../../database/src/www/conduit/database/interface');

const browseArticles = () => {
    return [

        {
            id: 'article-1',
            title: "Learning Polylith",
            foo: "bar"
        },
        {
            id: 'article-2',
            title: "Learning Polylith Architecture",
        },

    ]
}

exports.browseArticles = browseArticles;