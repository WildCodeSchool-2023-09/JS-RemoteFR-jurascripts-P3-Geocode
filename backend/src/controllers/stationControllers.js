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
    const { city } = await req.query;

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
    const { x, y } = await req.query;

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
  const {
    nomStation,
    localisation,
    conditionAcces,
    horaires,
    longitude,
    latitude,
  } = await req.body;

  try {
    const insertId = await tables.station.create(
      nomStation,
      localisation,
      conditionAcces,
      horaires,
      longitude,
      latitude
    );

    res.status(201).json(insertId);
  } catch (err) {
    console.error("Error adding station:", err);
    next(err);
  }
};

/* ******************************* PUT ****************************** */

const editName = async (req, res, next) => {
  try {
    const nameStation = await req.body;
    const id = await req.params.id;

    const updateName = await tables.station.updateName(nameStation, id);

    if (updateName.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const editLocation = async (req, res, next) => {
  try {
    const address = await req.body;
    const id = await req.params.id;

    const updateAddress = await tables.station.updateLocation(address, id);

    if (updateAddress.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};
const editAcces = async (req, res, next) => {
  try {
    const access = await req.body;
    const id = await req.params.id;

    const updateAccess = await tables.station.updateAccess(access, id);

    if (updateAccess.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};
const editHours = async (req, res, next) => {
  try {
    const hours = await req.body;
    const id = await req.params.id;

    const updateHours = await tables.station.updateHours(hours, id);

    if (updateHours.affectedRows === 0) {
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
    const x = await req.body;
    const y = await req.body;
    const id = await req.params.id;

    const updateGeoPoint = await tables.station.updateGeoPoint(x, y, id);

    if (updateGeoPoint.affectedRows === 0) {
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
  readLocation,
  readGeo,
  add,
  editName,
  editLocation,
  editAcces,
  editHours,
  editGeo,
};
