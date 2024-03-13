const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("@fastify/cors");

fastify.register(cors, {
  origin: "http://localhost:3000", // Change this to your React frontend URL
});

// import routes
const contentRoutes = require("./routes/content.routes.js");

// connect to DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// start server
fastify.register(contentRoutes, { prefix: "/api/" });

const start = async () => {
  try {
    await fastify.listen(5000);
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
