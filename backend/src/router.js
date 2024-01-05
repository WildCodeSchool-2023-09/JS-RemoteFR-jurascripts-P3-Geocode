const express = require("express");

const router = express.Router();

/* ******************************* Controllers ****************************** */

const itemControllers = require("./controllers/itemControllers");
const stationControllers = require("./controllers/stationControllers");

/* ******************************* Item ****************************** */

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ******************************* Station ****************************** */
// ***** GET
router.get("/station", stationControllers.browse);
router.get("/station/address", stationControllers.readLocation);
router.get("/station/geopoint", stationControllers.readGeo);
router.get("/station/:id", stationControllers.read);

// ***** POST
router.post("/station", stationControllers.add);

// ***** PUT
// router.put("/station/:id/name", stationControllers.updateName);
// router.put("/station/:id/location", stationControllers.updateLocation);
// router.put("/station/:id/acces", stationControllers.updateAcces);
// router.put("/station/:id/hours", stationControllers.updateHours);
// router.put("/station/:id/geopoint", stationControllers.updateGeoPoint);

/* ************************************************************************* */

module.exports = router;
