const express = require("express");

const router = express.Router();

/* ******************************* Controllers ****************************** */
const { hashPassword } = require("./services/auth");
const userControllers = require("./controllers/userControllers");
const stationControllers = require("./controllers/stationControllers");
const authControllers = require("./controllers/authControllers");

/* ******************************* User ****************************** */
// ***** GET
router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);

// ***** POST
router.post("/user", hashPassword, userControllers.add);

/* ******************************* AUTH ****************************** */

router.post("/login", authControllers.login);

/* ******************************* Station ****************************** */
// ***** GET
router.get("/station", stationControllers.browse);
router.get("/station/address", stationControllers.readLocation);
router.get("/station/geopoint", stationControllers.readGeo);
router.get("/station/:id", stationControllers.read);

// ***** POST
router.post("/station", stationControllers.add);

// ***** PUT
router.put("/station/name/:id", stationControllers.editName);
router.put("/station/address/:id", stationControllers.editLocation);
router.put("/station/acces/:id", stationControllers.editAcces);
router.put("/station/hours/:id", stationControllers.editHours);
router.put("/station/geopoint/:id", stationControllers.editGeo);

/* ************************************************************************* */

module.exports = router;
