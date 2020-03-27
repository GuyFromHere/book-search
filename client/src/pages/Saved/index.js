import React, { useEffect, useState } from "react";
import DeleteBtn from "../../components/DeleteBtn";
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
		API.deleteBook(id);
		//loadBooks();
		API.getBooks()
			.then(res => setBooks(res.data))
			.catch(err => console.log(err));
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
				<div className="results">
					<span id="resultsHeader">Saved Books</span>
					<div className="resultsContainer">{renderBooks()}</div>
				</div>
			</Row>
		</Container>
	);
}

export default Saved;
