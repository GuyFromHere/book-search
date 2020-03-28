import React, { useEffect, useState } from "react";
import { Row, Container } from "../../components/Grid";
import { SavedCard } from "../../components/Card";

import API from "../../utils/API";

function Saved() {
	// Setting our component's initial state
	const [books, setBooks] = useState([]);

	// Load all books and store them with setBooks
	useEffect(() => {
		loadBooks();
	}, []);

	// Loads all books and sets them to books
	const loadBooks = () => {
		API.getBooks()
			.then(res => setBooks(res.data))
			.catch(err => console.log(err));
	};

	const deleteBook = id => {
		API.deleteBook(id)
		console.log('delete book ' + id)
		loadBooks();
		loadBooks();
	};

	const renderBooks = () => {
		if ({ books } === "undefined") {
			return <h3>No Results to Display</h3>;
		} else {
			return (
				<div className="results">
					{books.map(book => {
						return <SavedCard book={book} onClick={deleteBook} />;
					})}
				</div>
			);
		}
	};

	return (
		<Container>
			<Row>
				{books.length ? 
				
				<div className="results">
					<h3>Saved Books</h3>
					<div className="resultsContainer">{renderBooks()}</div>
				</div>
				: <h3>No saved books.</h3>}
			</Row>
		</Container>
	);
}

export default Saved;
