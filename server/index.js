const fastify = require('fastify')({ logger: true })

fastify.route({
    method: 'GET',
    url: '/',
    preHandler: async (request, reply) => {},
    handler: async (request, reply) => {
        return { hello: 'world' }
    }
})

fastify.route({
    method: 'GET',
    url: '/test',
    preHandler: async (request, reply) => {},
    handler: async (request, reply) => {
        return { testing: '123' }
    }
})

void async function start () {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
