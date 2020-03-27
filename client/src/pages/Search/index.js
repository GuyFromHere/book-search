import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Card, CardButton, CardHeader } from "../../components/Card";
import { Input, FormBtn } from "../../components/Form";
import "./style.css";

class Search extends Component {
	constructor() {
		super();
		this.state = {
			books: [],
			formObject: {
				title: ""
			}
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentDidMount() {
		this.loadBooks(this.state.books);
	}

	loadBooks(res) {
		this.setState({ books: res });
	}

	handleInputChange(event) {
		const { name, value } = event.target;
		this.setState({ formObject: { [name]: value } });
	}

	handleFormSubmit(event) {
		event.preventDefault();
		if (this.state.formObject.title) {
			console.log("search handleformsubmit");
			console.log(this.state.formObject.title);
			API.searchBooks({
				title: this.state.formObject.title
			})
				.then(res => {
					this.setState({ books: res });
					console.log("state of books:");
					console.log(this.state.books);
					this.loadBooks(this.state.books);
				})
				.catch(err => console.log(err));
		}
	}

	renderBooks() {
		console.log("Search renderBooks");
		if (this.state.books === "undefined") {
			console.log("books undefined");
			return <h3>No Results to Display</h3>;
		} else {
			return (
				<div className="results">
					{this.state.books.map(book => {
						return <Card book={book} />;
					})}
				</div>
			);
		}
	}

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<form>
							<Input
								onChange={this.handleInputChange}
								name="title"
								placeholder="Title"
							/>
							<FormBtn
								disabled={
									!this.state.formObject.title && !this.state.formObject.author
								}
								onClick={this.handleFormSubmit}
							>
								Search
							</FormBtn>
						</form>
					</Col>
				</Row>
				<Row>
					<div className="results">
						<span id="resultsHeader">Results</span>
						<div className="resultsContainer">{this.renderBooks()}</div>
					</div>
				</Row>
			</Container>
		);
	}
}

export default Search;
