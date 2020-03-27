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

export function CardHeader(props) {
	return (
		<div className="card-title">
			<h2>{props.title}</h2>
			<h3></h3>
			<h3>{props.authors}</h3>
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
