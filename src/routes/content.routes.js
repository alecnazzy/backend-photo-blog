const contentController = require("../controllers/content.controller");

async function routes(fastify, options) {
  fastify.get("/p", contentController.get);
  fastify.get("/p/:id", contentController.getId);
  fastify.post("/p/create", contentController.create);
  fastify.put("/p/update/:id", contentController.update);
  fastify.delete("/p/delete/:id", contentController.deleteId);
}

module.exports = routes;
