import React from 'react';
import ReactDOM from 'react-dom';
var Ink = require('react-ink');

import {
	Router,
	Route,
	Link,
	browserHistory
} from 'react-router';






var effectNode;
let Item = (props) => {






	let handleMouseDown = (param, salary, e) => {

const back = document.getElementsByClassName('backButton')[0];

		return function() {


			browserHistory.push('/ocupation/' + param);

			localStorage.setItem('--occupation', salary)
			localStorage.setItem('-occupation-', param)

			props.handleClick();

			props.loadingCallback(true)

		}

	}



	return ( <
		div className = "hover1"
		onMouseDown = {
			handleMouseDown(props.email, props.salary)
		} >

		<
		div className = "de" > {
			props.email
		} < /div>  <div className = "ret" style = {{ width: parseInt(props.salary.slice(1)) * 2.5 + 'px' }}> { props.salary } </div > < /div> 
	)


}

export default Item