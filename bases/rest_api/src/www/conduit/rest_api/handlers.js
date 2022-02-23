const articleInterface = require('../../../../../../components/article/src/www/conduit/article/interface')
const userInterface = require('../../../../../../components/user/src/www/conduit/user/interface')

// articles
const browseArticles = (req, res) => {
    return articleInterface.browseArticles()
        .then(articles => {
            return res.json({ articles });
        })
};

// user
const registerUser = (req, res) => {
    return res.json({ user: "TODO" })
}

const loginUser = (req, res) => {
    const { username, password } = req.body;
    return userInterface.login({
        username: username || 'john.doe',
        password: password || 'password'
    }).then(user => {
        return res.json({ user })
    })
}

module.exports = {
    // Article
    browseArticles,
    // User
    loginUser,
    registerUser,
}




