const {Router} = require('telegram-framework');

const main = new Router();

main.on('/', (req, res) => {
   res.message("Hello world!");
});

module.exports = main;