const articleInterface = require('../../../../../../components/article/src/www/conduit/article/interface')

const browseArticles = (req, res) => {
    return res.json({ articles: articleInterface.browseArticles() });
};

exports.browseArticles = browseArticles;