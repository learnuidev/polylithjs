const express = require('express')
const https = require('https')
const http = require('http')
const routes = require('./routes')
const bodyParser = require('body-parser')


const start = (props) => {
    const app = express()

    // Middlewares
    app.use(bodyParser.json());

    // Routes
    routes.routes({ app })

    // Constants
    const PORT = props?.port || 3000

    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })
}


const stop = () => {
    process.exit(0)
}


exports.start = start;
exports.stop = stop;


