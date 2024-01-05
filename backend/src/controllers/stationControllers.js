const tables = require("../tables");

/* ******************************* GET ****************************** */

const browse = async (req, res, next) => {
  try {
    const stations = await tables.station.readAll();
    res.json(stations);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const station = await tables.station.readId(req.params.id);

    if (station == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(station);
    }
  } catch (err) {
    next(err);
  }
};

const readLocation = async (req, res, next) => {
  try {
    const { city } = req.query;

    const station = await tables.station.readLocation(city);

    if (station == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(station);
    }
  } catch (err) {
    next(err);
  }
};

const readGeo = async (req, res, next) => {
  try {
    const { x, y } = req.query;

    const station = await tables.station.readGeoPoint(x, y);

    if (station == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(station);
    }
  } catch (err) {
    next(err);
  }
};

/* ******************************* POST ****************************** */

const add = async (req, res, next) => {
  const station = req.body;

  try {
    const insertId = await tables.station.create(
      station.nomStation,
      station.localisation,
      station.conditionAcces,
      station.horaires,
      station.longitude,
      station.latitude
    );

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

/* ******************************* PUT ****************************** */

module.exports = {
  browse,
  read,
  readLocation,
  readGeo,
  add,
};
