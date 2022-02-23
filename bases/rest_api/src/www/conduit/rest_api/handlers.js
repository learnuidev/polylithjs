const articleInterface = require('../../../../../../components/article/src/www/conduit/article/interface')

const browseArticles = (req, res) => {
    return articleInterface.browseArticles()
        .then(articles => {
            return res.json({ articles });
        })
};

exports.browseArticles = browseArticles;