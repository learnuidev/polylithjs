const handlers = require('./handlers')

const routes = ({ app }) => {
    // respond with "hello world" when a GET request is made to the homepage
    app.get('/', (req, res) => {
        res.send('hello world')
    })

    app.get('/api/articles', handlers.browseArticles)
    app.post('/api/register', handlers.registerUser)
    app.post('/api/login', handlers.loginUser)
}

exports.routes = routes;