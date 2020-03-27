import React from "react";
import API from "../../utils/API";
import "./style.css";

/* export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
} */

function handleSave(book) {
	console.log("card clicked");
	console.log(book.title);
	API.saveBook(book)
		.then(res => {
			//setBooks(res.data)
			console.log("card saved book -> ");
			console.log(res);
		})
		.catch(err => console.log(err));
}

export function CardHeader(props) {
	return (
		<div className="card-header">
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
			<CardHeader title={props.book.title} authors={props.book.authors} />
			<CardButton name="view" value="View" href={props.book.link} target="_blank" />
			<CardButton name="save" value="Save" onClick={() => handleSave(props.book)} />
			<CardBody image={props.book.image} description={props.book.description} />
		</div>
	);
}
