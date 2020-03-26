import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="container">
				<Nav />
				<Jumbotron>
					<h1>(React) Google Books Search</h1>
					<h3>Search for and Save Books of Interest</h3>
				</Jumbotron>
				<Switch>
					<Route exact path={["/", "/search"]}>
						<Search />
					</Route>
					<Route exact path={"/saved"}>
						<Saved />
					</Route>
					<Route>
						<NoMatch />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
