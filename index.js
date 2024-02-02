"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app/app");
console.log(process.env.APP_NAME);
const PORT = Number(process.env.PORT);
(0, app_1.api)()
    .then(app => app.listen(PORT))
    .then(() => { console.log(`App is running on port: ${PORT}`); });
