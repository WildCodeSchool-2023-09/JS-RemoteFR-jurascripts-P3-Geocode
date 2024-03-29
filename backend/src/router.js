const express = require("express");

const router = express.Router();

/* ******************************* Controllers ****************************** */
const { hashPassword, verifyToken } = require("./services/auth");
const userControllers = require("./controllers/userControllers");
const stationControllers = require("./controllers/stationControllers");
const authControllers = require("./controllers/authControllers");
const terminalControllers = require("./controllers/terminalControllers");

/* ******************************* User ****************************** */
// ***** GET
router.get("/user", userControllers.browse);
router.get("/user/all", userControllers.readAllUsers);
router.get("/user/nickname", userControllers.readUser);
router.get("/user/register", userControllers.readDate);
router.get("/user/:id", userControllers.read);

// ***** POST
router.post("/user", hashPassword, userControllers.add);

// ***** PUT
router.put("/user/nickname/:id", userControllers.editNickname);
router.put("/user/name/:id", userControllers.editName);
router.put("/user/email/:id", userControllers.editEmail);
router.put("/user/city/:id", userControllers.editCity);

/* ******************************* AUTH ****************************** */

router.post("/login", authControllers.login);

/* ******************************* Station ****************************** */
// ***** GET
router.get("/station", stationControllers.browse);
router.get("/station/address", stationControllers.readLocation);
router.get("/station/:id", stationControllers.read);

// ***** POST
router.post("/station", stationControllers.add);

// ***** PUT
router.put("/station/name/:id", stationControllers.editName);
router.put("/station/address/:id", stationControllers.editLocation);
router.put("/station/acces/:id", stationControllers.editAcces);
router.put("/station/hours/:id", stationControllers.editHours);

/* ******************************* Terminal ****************************** */
// ***** GET
router.get("/terminal", terminalControllers.browse);
router.get("/terminal/operator", terminalControllers.readOperator);
router.get("/terminal/power", terminalControllers.readPower);
router.get("/terminal/status", terminalControllers.readStatus);
router.get("/terminal/geo", terminalControllers.readGeo);
router.get("/terminal/findTerminal", terminalControllers.findTerminalRead);
router.get("/terminal/geoStation", terminalControllers.readStationGeo);
router.get("/terminal/:id", terminalControllers.read);

// ***** POST
router.post("/terminal", terminalControllers.add);

// ***** PUT
router.put("/terminal/operator/:id", terminalControllers.editOperator);
router.put("/terminal/power/:id", terminalControllers.editPower);
router.put("/terminal/status/:id", terminalControllers.editStatus);
router.put("/terminal/geo/:id", terminalControllers.editGeo);
router.put(
  "/terminal/full/:id",
  verifyToken,
  terminalControllers.editFindTerminal
);

/* ************************************************************************* */

module.exports = router;
