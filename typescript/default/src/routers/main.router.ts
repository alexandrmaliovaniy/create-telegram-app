import {Router} from "telegram-framework";

const main = new Router();

main.on('/', (req, res) => {
    res.message("Hello world!");
})


export default main;