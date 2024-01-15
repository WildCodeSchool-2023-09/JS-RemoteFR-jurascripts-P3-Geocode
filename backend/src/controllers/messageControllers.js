const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const messages = await tables.message.readAll();
    res.json(messages);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const message = await tables.message.read(req.params.id);
    if (message == null) {
      res.sendStatus(404);
    } else {
      res.json(message);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  if (!req.auth.isAdmin) {
    res.sendStatus(403);
    return;
  }

  const { content, received } = req.body;

  const message = { userId: req.auth.sub, content, received };

  try {
    const insertId = await tables.message.create(message);
    res.status(201).json(insertId);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
};
