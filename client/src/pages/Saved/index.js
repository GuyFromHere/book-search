import React, { useEffect, useState } from "react";
import DeleteBtn from '../../components/DeleteBtn';
import API from "../../utils/API";

function Saved() {
	// Setting our component's initial state
	const [books, setBooks] = useState([]);
	const [formObject, setFormObject] = useState({});

	// Load all books and store them with setBooks
	useEffect(() => {
		loadBooks();
	}, []);

	// Loads all books and sets them to books
	const loadBooks = () => {
		console.log("saved loadBooks");
		API.getBooks()
			.then(res => setBooks(res.data))
			.catch(err => console.log(err));
	};

	const deleteBook = (id) => {
		API.deleteBook(id);
		loadBooks();
	  }

	return (
		<div>
			<h1>Saved Books:</h1>
			<ul>
				{books.map(book => {
					return (
						<li>
							{book._id}
							<a href={"/books/" + book._id}>
								<strong>
									{book.title} by {book.author}
								</strong>
								
							</a>
							<DeleteBtn onClick={() => deleteBook(book._id)} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Saved;
