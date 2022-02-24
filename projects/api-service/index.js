const restApi = require('../../bases/rest_api/src/www/conduit/rest_api')

const keyMap = {
    "-p": 'port',
    "-c": 'client'
}


// Move to helper function
const myArgs = process.argv.slice(2);
const keys = myArgs.filter((v, i) => i % 2 === 0)
const keysClean = keys.map(k => {
    if (k.includes("--")) {
        return k.slice(2)
    } else if (k.includes("-")) {
        return keyMap[k]
    }
    return k
})
const values = myArgs.filter((v, i) => i % 2 !== 0)
const config = keysClean.reduce((acc, curr, idx) => {
    return {
        ...acc,
        [curr]: values[idx]
    }

}, {})

console.log("config", config)
// console.log(process.argv)
// console.log('myArgs: ', myArgs);


restApi.start(config);