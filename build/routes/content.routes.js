const fastify = require("fastify")({ logger: true });
const contentController = require("../controllers/content.controller");

async function auth(request, reply) {
  const apiKey = request.headers["x-api-key"];
  const knownKey = process.env.API_KEY;

  if (apiKey !== knownKey) {
    return reply.code(401).send({ error: "Unauthorized" });
  }
}

fastify.addHook("preHandler", auth);

async function routes(fastify, options) {
  fastify.get("/p", { preHandler: auth }, contentController.get);
  fastify.get("/p/:id", { preHandler: auth }, contentController.getId);
  fastify.post("/p/create", { preHandler: auth }, contentController.create);
  fastify.put("/p/update/:id", { preHandler: auth }, contentController.update);
  fastify.delete(
    "/p/delete/:id",
    { preHandler: auth },
    contentController.deleteId
  );
}

module.exports = routes;
