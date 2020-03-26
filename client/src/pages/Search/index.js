import React, { useEffect, useState } from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

function Search() {
	const [formObject, setFormObject] = useState({
		bookSearch: ""
	});

	//useEffect(() => {}, []);

	const handleFormSubmit = event => {
		// Search Google books and set results in books state to be rendered
		// in results div
		event.preventDefault();
		API.searchBooks(bookSearch)
			.then(res => setBooks(res.data))
			.catch(err => console.log(err));
	};

	return (
		<div className="searchForm">
			<h1>Book Search:</h1>
			<form>
				<label for="searchInput">Book:</label>"
				<Input
					name="BookSearch"
					value={bookSearch}
					onChange={handleInputChange}
					placeholder="Search For a Book"
				/>
				<FormBtn onClick={handleFormSubmit} type="success" className="input-lg">
					Search
				</FormBtn>
			</form>
		</div>
	);
}

export default Search;
