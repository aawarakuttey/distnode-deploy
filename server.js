#!/usr/bin/env node

const server = require('fastify')();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 8000;
const Recipe = require('./recipe.js');

console.log(server)

server.get('/', async (request, reply) => {
    return "Hello from Distributed Node.js!";
});

server.get('/recipe/:id', async (request, reply) => {
    const recipe = new Recipe(request.params.id);
    return await recipe.hydrate();
});

server.listen(PORT, HOST, (error, host) => {
    if (error) {
        console.warn(`Server failed to start ${error}`);
        throw error;
    }
    console.log(`Server running at ${host}`);
});