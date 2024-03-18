const Content = require("../models/content.model");

async function get(req, reply) {
  try {
    const content = await Content.find();
    reply.send(content); // Return content as JSON response
  } catch (error) {
    throw new Error(error);
  }
}

async function getId(req, reply) {
  try {
    const content = await Content.findById(req.params.id);
    reply.send(content); // Return content as JSON response
  } catch (error) {
    throw new Error(error);
  }
}

async function create(req, reply) {
  try {
    const content = new Content(req.body);
    await content.save();
    reply.code(201).send(content); // Return created content as JSON response with status code 201
  } catch (error) {
    throw new Error(error);
  }
}

async function update(req, reply) {
  try {
    const content = await Content.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    reply.send(content); // Return updated content as JSON response
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteId(req, reply) {
  try {
    const content = await Content.findByIdAndDelete(req.params.id);
    reply.send(content); // Return deleted content as JSON response
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  get,
  getId,
  create,
  update,
  deleteId,
};
