import React, { Component } from 'react';
import { Input } from 'reactstrap';

class Form extends Component {
	render() {
		return (
			<div className="Form">
				<h1 className="display-2 text-center">ToDo List</h1>
				<form onSubmit={(evt) => this.props.handleSubmit(evt)}>
					<Input onChange={(evt) => this.props.handleChange(evt)} value={this.props.inputValue} />
				</form>
			</div>
		);
	}
}

export default Form;
