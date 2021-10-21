import React from "react";
export default class MyForm extends React.Component {
state = {
	name: "Ben",
	favoritePet: "alpeca",
	rememberMe: true,
	title: "mr"}


handleChange = event => {
	console.log(event.target.name);
	const isCheckBox = event.target.type === 'checkbox';
	this.setState({ 
	   [event.target.name]: isCheckBox
	   ? event.target.checked 
	   : event.target.value 
	});
};



handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
};




	render() {
        return ( 
	<form onSubmit={this.handleSubmit}>
	<input 
		name="name"
		value={this.state.name} 
		onChange={this.handleChange} />
	<textarea 
		name="favoritePet"
		value={this.state.favoritePet } 
		onChange={this.handleChange} />
	<input
		name="rememberMe"
		type="checkbox"
		value={this.state.rememberMe}
		onChange={this.handleChange}   />
	<select 
		name="title" 
		onChange={this.handleChange}
	>
	<option>Mr.</option>
	<option>Miss.</option>
	<option>Ms.</option>
	<option>mrs.</option>
	</select>

<button type="submit"> submit </button>
</form>
);
    }
}
