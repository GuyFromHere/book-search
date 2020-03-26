const router = require("express").Router();
const gbooksController = require("../../controllers/gbooksController");
const api = "AIzaSyBMwTE4OhmgvtizU7TDMEjcMVy2bRFjhaM";

// Matches with "/api/gbooks"
router.route("/").get(gbooksController.findBook);
