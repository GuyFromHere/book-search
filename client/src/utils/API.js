import axios from "axios";
import NOIMAGE from "../NOIMAGE.png";

export default {
	// Gets all books
	getBooks: function() {
		return axios.get("/api/books");
	},
	// Deletes the book with the given id
	deleteBook: function(id) {
		return axios.delete("/api/books/" + id);
	},
	// Saves a book to the database
	saveBook: function(bookData) {
		return axios.post("/api/books", bookData);
	},
	searchBooks: function(searchParams) {
		return axios.get("/api/books/search/" + searchParams.title).then(result => {
			const newArr = result.data.items.map(item => {
				return {
					key: item.id,
					title: item.volumeInfo.title,
					authors: item.volumeInfo.authors,
					description: item.volumeInfo.description,
					image: item.volumeInfo.imageLinks
						? item.volumeInfo.imageLinks.thumbnail
						: NOIMAGE,
					link: item.volumeInfo.infoLink
				};
			});
			return newArr;
		});
	}
};
