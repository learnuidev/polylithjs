const handlers = require('./handlers')

const routes = ({ app }) => {
    // respond with "hello world" when a GET request is made to the homepage
    app.get('/', (req, res) => {
        res.send('hello world')
    })

    app.get('/articles', handlers.browseArticles)
}

exports.routes = routes;