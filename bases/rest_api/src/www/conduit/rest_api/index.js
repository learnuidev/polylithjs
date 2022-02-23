const express = require('express')
const https = require('https')
const http = require('http')
const routes = require('./routes')


const start = (props) => {
    const app = express()
    // respond with "hello world" when a GET request is made to the homepage
    routes.routes({ app })

    // constants
    const PORT = props.port || 3000;

    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })

    return app
}

exports.start = start;


