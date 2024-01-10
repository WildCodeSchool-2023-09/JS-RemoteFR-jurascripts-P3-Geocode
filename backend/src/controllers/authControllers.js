const argon2 = require("argon2");

const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readEmail(req.body.email);

    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(user.password, req.boby.password);

    if (verified) {
      delete user.password;
      res.json(user);
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
