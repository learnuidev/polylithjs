const repl = require('repl');
const restApi = require('./bases/rest_api/src/www/conduit/rest_api')


repl.start('> ').context.restApi = restApi;