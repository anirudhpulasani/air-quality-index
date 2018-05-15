import React from "react";

const Form = (props) =>(
	<div>
		<div className = "Form-content">
		<form onSubmit = {props.getPollution}>
			<p className="Form-input"><input className = "form-control" type = "text" name = "city" placeholder = "City" /></p>
			<p className="Form-input"><input className = "form-control" type = "text" name = "state" placeholder = "State" /></p>
			<p className="Form-input"><input className = "form-control" type = "text" name = "country" placeholder = "Country" /></p>
			<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	</div>
)

export default Form;