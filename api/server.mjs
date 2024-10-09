// ESM
import Fastify from 'fastify'

const fastify  = Fastify({
  logger: true
})

// Declare a route
fastify.get('/feature/:code', function (request, reply) {
    const code = request.params.code
    reply.send({ "code": code,"enabled": true })
})

export function createServer() {
  return fastify
}