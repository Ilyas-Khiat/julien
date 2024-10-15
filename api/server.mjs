// ESM
import Fastify from 'fastify'
import { getFeatureState } from './feature.js'

const fastify  = Fastify({
  logger: true
})

// Declare a route
fastify.get('/feature/:code',async function (request, reply) {
    const code = request.params.code;
    const state = await getFeatureState(code);
    reply.send({ "code": code,"enabled": state === "enabled" });
})

export function createServer() {
  return fastify
}