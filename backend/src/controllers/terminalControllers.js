const tables = require("../tables");

/* ******************************* GET ****************************** */

const browse = async (req, res, next) => {
  try {
    const terminal = await tables.terminal.readAll();
    res.json(terminal);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const terminal = await tables.terminal.readId(req.params.id);

    if (terminal == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(terminal);
    }
  } catch (err) {
    next(err);
  }
};

const readOperator = async (req, res, next) => {
  try {
    const { operator } = await req.query;

    const terminal = await tables.terminal.readOperator(operator);

    if (terminal == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(terminal);
    }
  } catch (err) {
    next(err);
  }
};

const readPower = async (req, res, next) => {
  try {
    const { power } = await req.query;

    const terminal = await tables.terminal.readPower(power);

    if (terminal == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(terminal);
    }
  } catch (err) {
    next(err);
  }
};

const readStatus = async (req, res, next) => {
  try {
    const { status } = await req.query;

    const terminal = await tables.terminal.readStatus(status);

    if (terminal == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(terminal);
    }
  } catch (err) {
    next(err);
  }
};

const readGeo = async (req, res, next) => {
  try {
    const { geo } = await req.query;

    const terminal = await tables.terminal.readGeo(geo);

    if (terminal == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(terminal);
    }
  } catch (err) {
    next(err);
  }
};

const findTerminalRead = async (req, res, next) => {
  try {
    const terminal = await tables.terminal.findTerminalByRead();
    if (terminal == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(terminal);
    }
  } catch (err) {
    next(err);
  }
};
/* ******************************* POST ****************************** */

const add = async (req, res, next) => {
  const { nomOperateur, puissanceNominale, status, longitude, latitude } =
    await req.body;

  try {
    const insertId = await tables.terminal.createTerminal(
      nomOperateur,
      puissanceNominale,
      status,
      longitude,
      latitude
    );

    res.status(201).json(insertId);
  } catch (err) {
    console.error("Error adding terminal:", err);
    next(err);
  }
};

/* ******************************* PUT ****************************** */

const editOperator = async (req, res, next) => {
  try {
    const nameOperator = await req.body;
    const id = await req.params.id;

    const updateOperator = await tables.terminal.updateOperator(
      nameOperator,
      id
    );

    if (updateOperator.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const editPower = async (req, res, next) => {
  try {
    const power = await req.body;
    const id = await req.params.id;

    const updatePower = await tables.terminal.updatePower(power, id);

    if (updatePower.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};
const editStatus = async (req, res, next) => {
  try {
    const status = await req.body;
    const id = await req.params.id;

    const updateStatus = await tables.terminal.updateStatus(status, id);

    if (updateStatus.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};
const editGeo = async (req, res, next) => {
  try {
    const geo = await req.body;
    const id = await req.params.id;

    const updateGeo = await tables.terminal.updateGeo(geo, id);

    if (updateGeo.affectedRows === 0) {
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
  readOperator,
  readPower,
  readStatus,
  readGeo,
  findTerminalRead,
  add,
  editOperator,
  editPower,
  editStatus,
  editGeo,
};
