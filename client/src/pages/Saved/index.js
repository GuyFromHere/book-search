import React, { useEffect, useState } from "react";
import { Row, Container } from "../../components/Grid";
import { SavedCard } from "../../components/Card";
import API from "../../utils/API";

function Saved() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		loadBooks();
	}, []);

	const loadBooks = () => {
		API.getBooks()
			.then(res => setBooks(res.data))
			.catch(err => console.log(err));
	};

	// pass delete function to SavedCard as prop, then call it when the delete button is clicked
	const handleDelete = (id) => {
		API.deleteBook(id)
		loadBooks();
	}

	const renderBooks = () => {
		return (
			<div className="results">
				{books.map(book => {
					return <SavedCard book={book} handleDelete={handleDelete} />;
				})}
			</div>
		);
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
