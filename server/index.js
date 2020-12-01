const fastify = require('fastify')({ logger: true })

fastify.route({
    method: 'GET',
    url: '/',
    preHandler: async (request, reply) => {},
    handler: async (request, reply) => {
        return { hello: 'world' }
    }
})

const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
