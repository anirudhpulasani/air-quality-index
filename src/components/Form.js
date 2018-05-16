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
			<button onClick = {props.getNearestPollution} name = "nearest" value = "nearest" style = {{marginTop:'10px'}} className="btn btn-success">Click here to get Air Quality Index of nearest city</button>
		</div>
	</div>
)

export default Form;