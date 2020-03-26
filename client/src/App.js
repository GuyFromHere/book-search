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
				<Jumbotron />
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
