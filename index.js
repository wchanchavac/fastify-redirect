// Require the framework and instantiate it
const fastify = require('fastify')({ logger: false })

// Declare a route
fastify.get('/', (request, reply) => {
    reply.code(303).redirect(302, 'https://wchanchavac.hashnode.dev')
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()