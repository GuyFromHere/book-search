const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const api = "AIzaSyBMwTE4OhmgvtizU7TDMEjcMVy2bRFjhaM";

// Matches with "/api/books"
router
	.route("/")
	.get(booksController.findAll)
	.post(booksController.create);

// Matches with "/api/books/:id"
router
	.route("/:id")
	.get(booksController.findById)
	.put(booksController.update)
	.delete(booksController.remove);

module.exports = router;
