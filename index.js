"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var app = (0, fastify_1.fastify)();
app.listen({ port: 3000 }, function (error) {
    if (error)
        console.error(error);
    console.log("Server running on 3000");
});
