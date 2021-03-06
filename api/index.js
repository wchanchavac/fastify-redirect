"use strict";

// Require the framework
import Fastify from "fastify";

// Instantiate Fastify with some config
const app = Fastify({
  logger: true,
});

// Register your application as a normal plugin.
// app.register(import("../src/app"));
app.get('/', (request, reply) => {
  reply.code(303).redirect(302, 'https://wchanchavac.hashnode.dev')
})

export default async (req, res) => {
    await app.ready();
    app.server.emit('request', req, res);
}