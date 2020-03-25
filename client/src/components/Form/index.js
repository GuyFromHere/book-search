import React from "react";

export function FormInput(props) {
	return <input {...props}></input>;
}

export function FormButton(props) {
	return <input type="submit"></input>;
}

export function Form(props) {
	return <form {...props}>{children}</form>;
}
