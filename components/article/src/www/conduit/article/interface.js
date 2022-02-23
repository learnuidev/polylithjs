// import core from './core';
const core = require('./core')

const browseArticles = async () => await core.browseArticles();

exports.browseArticles = browseArticles;


