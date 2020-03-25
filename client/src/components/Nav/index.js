import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
	return (
		<div className="col-3 menu">
			<ul>
				<Link
					to="/"
					className={
						window.location.pathname === "/search" ? "nav-link active" : "nav-link"
					}
				>
					<li>Search</li>
				</Link>
				<Link
					to="/saved"
					className={
						window.location.pathname === "/saved" ? "nav-link active" : "nav-link"
					}
				>
					<li>Saved</li>
				</Link>
			</ul>
		</div>
	);
}

export default NavBar;
