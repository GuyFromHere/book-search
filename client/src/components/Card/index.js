import React from "react";
import API from "../../utils/API";
import "./style.css";

function handleSave(book) {
	API.saveBook(book)
		.then(res => {
			console.log("Book saved to DB.");
		})
		.catch(err => console.log(err));
}

// called when delete button is clicked...this triggers the handleDelete function in Saved component
function handleDeleteClick(id, handleDelete) {
	handleDelete(id);
}

export function CardHeader(props) {
	return (
		<div className="card-title">
			<h2>{props.title}</h2>
			<h3></h3>
			<h3>{props.authors.length > 1 ? props.authors.join(", ") : props.authors}</h3>
		</div>
	);
}

export function CardButton(props) {
	return (
		<a {...props} className="card-button">
			{props.value}
		</a>
	);
}

export function CardBody(props) {
	return (
		<div className="card-body">
			<img src={props.image} alt=""></img>
			<p>{props.description}</p>
		</div>
	);
}

export function Card(props) {
	return (
		<div className="card">
			<div className="card-header">
				<CardHeader title={props.book.title} authors={props.book.authors} />
				<div className="cardButtons">
					<CardButton name="view" value="View" href={props.book.link} target="_blank" />
					<CardButton name="save" value="Save" onClick={() => handleSave(props.book)} />
				</div>
			</div>
			<CardBody image={props.book.image} description={props.book.description} />
		</div>
	);
}

export function SavedCard(props) {
	return (
		<div className="card">
			<div className="card-header">
				<CardHeader title={props.book.title} authors={props.book.authors} />
				<div className="cardButtons">
					<CardButton name="view" value="View" href={props.book.link} target="_blank" />
					<CardButton
						name="delete"
						value="Delete"
						onClick={() => 
							handleDeleteClick(props.book._id, props.handleDelete)}
					/>
				</div>
			</div>
			<CardBody image={props.book.image} description={props.book.description} />
		</div>
	);
}
