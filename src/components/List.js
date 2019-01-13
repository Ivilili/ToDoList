import React, { Component } from 'react';
import Task from './Task';

class List extends Component {
	state = {};

	render() {
		return (
			<div className="List col-lg-6 col-8 mx-auto">
				{this.props.todos.map((todo, index) => {
					return <Task key={index} index={index} handleClick={this.props.handleClick} todo={todo} />;
				})}
			</div>
		);
	}
}

export default List;
