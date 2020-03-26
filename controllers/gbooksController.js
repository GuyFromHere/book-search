// Defining methods for the booksController
module.exports = {
	findAll: function(req, res) {
		db.Book.find(req.query)
			.sort({ date: -1 })
			.then(booksList => res.json(booksList))
			.catch(err => res.status(422).json(err));
	}
};
