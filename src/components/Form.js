import React, { Component } from 'react';
import { Input } from 'reactstrap';

class Form extends Component {
	render() {
		return (
			<div className="Form">
				<h1 className="display-2 text-center">ToDo List</h1>
				<p className="lead text-center">Welcome to my ToDo List Applications</p>
				<form className="col-lg-6 col-8 mx-auto" onSubmit={(e) => this.props.handleSubmit(e)}>
					<Input onChange={(e) => this.props.handleChange(e)} value={this.props.inputValue} />
				</form>
			</div>
		);
	}
}

export default Form;
