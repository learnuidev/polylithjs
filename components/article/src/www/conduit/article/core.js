const articleStore = require('./store')

const browseArticles = () => {
    return articleStore.browseArticles();
}

exports.browseArticles = browseArticles