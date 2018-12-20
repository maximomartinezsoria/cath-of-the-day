import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
	storeName = React.createRef();

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.history.push(`store/${this.storeName.value.value}`);
	}
	
	render(){
		return (
		
		<form action="#" method="GET" className="store-selector" onSubmit={this.handleSubmit}>
			<h2>Please enter a store</h2>
			<input ref={this.storeName} type="text" placeholder="Store name" defaultValue={getFunName()} required />
			<button type="submit">Visit Store -></button>
		</form> 
		
		);

	}
}

export default StorePicker;