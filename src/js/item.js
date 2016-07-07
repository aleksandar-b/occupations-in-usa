import React from 'react';
import ReactDOM from 'react-dom';
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

	componentDidMount() {




	}

	handleMouseDown(e) {

		var chart = document.querySelector('.obrus');
		effectNode = document.createElement('div');
		effectNode.className = 'circleEffect';

		var bounds = ReactDOM.findDOMNode(this).getBoundingClientRect();

		//effectNode.style.background = 'hsl(' + Math.round(Math.random() * 255) + ', 26%,62%)';
		effectNode.style.left = e.clientX + 'px';
		effectNode.style.top = bounds.top+window.scrollY-20 + bounds.height / 2 + 'px';

		var eff = chart.appendChild(effectNode);

		eff.addEventListener('animationend', function() {
			this.style.opacity = 0;
			setTimeout(function() {

				this.parentNode.removeChild(this);

			}.bind(this), 1500)


		})




	}

	handleClick() {

		this.props.handleClick();


	}

	render() {



		return ( < Link to = {
				"/ocupation/" + this.props.email
			} >
			<
			div className = "hover1"
			onMouseDown = {
				this.handleMouseDown.bind(this)
			}
			onMouseUp = {
				this.handleClick.bind(this)
			} >

			<
			div className = "de" > {
				this.props.email
			} < /div>  <
			div ref = "circle"
			className = "ret"
			style = {
				{
					width: parseInt(this.props.salary.slice(1)) * 3 + 'px'
				}
			} > {
				this.props.salary
			} < /div>

			<
			/div> <
			/Link > 

		)

	}

}

export default Item