const Content = require("../models/content.model");

async function get(req, reply) {
  try {
    const content = await Content.find();
    reply.code(200).header("Content-Type", "application/json").send(content);
  } catch (error) {
    throw new Error(error);
  }
}

async function getId(req, reply) {
  try {
    const content = await Content.findById(req.params.id);
    reply.send(content);
  } catch (error) {
    throw new Error(error);
  }
}

async function create(req, reply) {
  try {
    const content = new Content(req.body);
    await content.save();
    reply.code(201).send(content);
  } catch (error) {
    throw new Error(error);
  }
}

async function update(req, reply) {
  try {
    const content = await Content.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    reply.send(content);
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteId(req, reply) {
  try {
    const content = await Content.findByIdAndDelete(req.params.id);
    reply.send(content);
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
