const express = require("express");

const router = express.Router();

/* ******************************* Controllers ****************************** */
const { hashPassword, verifyToken } = require("./services/auth");
const userControllers = require("./controllers/userControllers");
const stationControllers = require("./controllers/stationControllers");
const authControllers = require("./controllers/authControllers");
const messageControllers = require("./controllers/messageControllers");

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

/* ******************************* Message ****************************** */
// ***** GET
router.get("/message", messageControllers.browse);
router.get("/message/:id", messageControllers.read);

// ***** POST
router.post("/message", messageControllers.add);

/* ************************************************************************* */

router.use(verifyToken);

module.exports = router;
