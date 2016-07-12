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
class Item extends React.Component {

	constructor(props) {
		super(props)
	}
	

	


	handleMouseDown(param,salary,e) {

	/*	var chart = document.getElementsByClassName('obrus')[0];
		effectNode = document.createElement('div');
		effectNode.className = 'circleEffect';

		var bounds = ReactDOM.findDOMNode(this).getBoundingClientRect();

		//effectNode.style.background = 'hsl(' + Math.round(Math.random() * 255) + ', 26%,62%)';
		effectNode.style.left = e.clientX + 'px';
		effectNode.style.top = bounds.top+window.scrollY-20 + bounds.height / 2 + 'px';

		var eff = chart.appendChild(effectNode);

		eff.addEventListener('animationend', function() {
			this.style.opacity = 0;

				this.parentNode.removeChild(this);


		})*/		
			browserHistory.push('/ocupation/'+param);
/*		var body = document.body;
		function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
		var random = getRandomInt(1,98);
		var hslrdm = random / 98 * 360;
		
		body.style.background = `url('../img/${random}.png')`;
		body.style.backgroundColor =  `hsl(${hslrdm}, 50%, 30%)`;
*/
		localStorage.setItem('--occupation',salary)
				localStorage.setItem('-occupation-',param)

		this.props.handleClick();

				this.props.loadingCallback(true)






	}

	handleClick(param) {

setTimeout(function(){


},100)




	}

	render() {



		return ( /*< Link to = {
				"/ocupation/" + this.props.email
			} >*/
			<
			div className = "hover1"
			onMouseDown = {
				this.handleMouseDown.bind(this,this.props.email,this.props.salary)
			}
			onClick = {
				this.handleClick.bind(this,this.props.email)
			} >

			<
			div className = "de" > {
				this.props.email
			} < /div>  <
			div /*ref = "circle"*/
			className = "ret"
			style = {
				{
					width: parseInt(this.props.salary.slice(1)) * 2.5 + 'px'
				}
			} > {
				this.props.salary
			} < /div>

			<
			/div> 
			/*</Link > */

		)

	}

}

export default Item