import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';


  class Item extends React.Component {

	constructor(props) {
		super(props)
	}
	handleClick() {
		this.props.handleClick();
		console.log(this.props.email);
		console.log(this.props.pushToPar);

	}

	render() {



		return ( <div className = "hover1" onClick = { this.handleClick.bind(this) }>
				<Link to = { "/ocupation/" + this.props.email }>
				<div className = "de" > { this.props.email } </div> 
				<div className = "ret" style = {{width: parseInt(this.props.salary.slice(1)) * 3 + 'px'}}> {this.props.salary} </div>
				
				 </Link > 
				 </div>)
		
	}

}

export default Item