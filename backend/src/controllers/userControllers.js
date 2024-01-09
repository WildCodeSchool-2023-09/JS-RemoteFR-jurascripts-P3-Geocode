const tables = require("../tables");

/* ******************************* GET ****************************** */

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const readAllUsers = async (req, res, next) => {
  try {
    const users = await tables.user.readAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const users = await tables.user.read(req.params.id);

    if (users == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    next(err);
  }
};

const readUser = async (req, res, next) => {
  try {
    const { name } = await req.query;
    const users = await tables.user.readUser(name);

    if (users == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    next(err);
  }
};

const readDate = async (req, res, next) => {
  try {
    const { date } = await req.query;
    const users = await tables.user.readDate(date);

    if (users == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(users);
    }
  } catch (err) {
    next(err);
  }
};

/* ******************************* POST ****************************** */

const add = async (req, res, next) => {
  const { nickname, email, password, registerDate } = await req.body;

  try {
    const insertId = await tables.user.create(
      nickname,
      email,
      password,
      registerDate
    );

    res.status(201).json(insertId);
  } catch (err) {
    console.error("Error adding user:", err);
    next(err);
  }
};

/* ******************************* Update ****************************** */

const editNickname = async (req, res, next) => {
  try {
    const nickname = await req.body;
    const id = await req.params.id;

    const updateNickname = await tables.user.update(nickname, id);

    if (updateNickname.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const editName = async (req, res, next) => {
  try {
    const { firstname, lastname } = await req.body;
    const id = await req.params.id;

    const updateNickname = await tables.user.updateName(
      firstname,
      lastname,
      id
    );

    if (updateNickname.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  readAllUsers,
  readUser,
  readDate,
  add,
  editNickname,
  editName,
};
