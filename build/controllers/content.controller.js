const Content = require("../models/content.model");

async function get(req, reply) {
  try {
    const content = await Content.find();
    return content;
  } catch (error) {
    throw new Error(error);
  }
}

async function getId(req, reply) {
  try {
    const content = await Content.findById(req.params.id);
    return content;
  } catch (error) {
    throw new Error(error);
  }
}

async function create(req, reply) {
  try {
    const content = new Content(req.body);
    return content.save();
  } catch (error) {
    throw new Error(error);
  }
}

async function update(req, reply) {
  try {
    const content = await Content.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return content;
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteId(req, reply) {
  try {
    const content = await Content.findByIdAndDelete(req.params.id);
    return content;
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
