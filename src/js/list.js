import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Item from './item';
import {
	Router,
	Route,
	Link,
	browserHistory
} from 'react-router';

class ListContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			friends: [],
			shouldRec: true

		}


	}



	shouldComponentUpdate() {

		return this.state.shouldRec;
	}

	componentDidMount() {

		var sidebar = document.querySelector('.e');
		var rect = sidebar.getBoundingClientRect();
		sidebar.style.height = window.innerHeight + 'px';
		if (this.state.opacity) {
			document.querySelector('.obrus').classList.add('opacity');
		}
		var fade = document.querySelector('.IfadeI');
		document.addEventListener('scroll', function(e) {


			if (window.pageYOffset > rect.top) {


				sidebar.style.position = 'fixed';
				sidebar.style.top = '0';
				sidebar.style.right = '0';
			} else {


				sidebar.style.position = 'relative';
			}
		});
		console.log(this.state.friends.length);

		if (!this.props.json) {

			fetch('https://gist.githubusercontent.com/samosale/bc0920114e48c1ccccef/raw/d80f635e60ecb9a3680cdb8f9bb6f52ee638e6f6/gistfile1.json')
				.then((response) => {

					return response.json()
				}).then((json) => {
				//	this.props.glState(json);
					fade.classList.add('Ifade');
					this.setState({
						friends: json,
						opacity: true,
						shouldRec: false
					});
				}).catch((ex) => {
					console.log('parsing failed', ex)
				});



		} else {
			this.setState({
				friends: this.props.json,
				opacity: true,
				shouldRec: false
			});

		}

	}

	handleClick() {


		this.props.glState();

	}



	render() {


		var friends = this.state.friends.sort(function(a, b) {
			return parseFloat(b['COL 9'].replace(/>=/i, '').slice(1)) - parseFloat(a['COL 9'].replace(/>=/i, '').slice(1));
		}).map(function(val, ind) {

			return <div key = {
				ind+ind
			} > < Item 
			pushToPar = {
				this.props.pushTo
			}
			email = {
				val['COL 1']
			}
			salary = {
				val['COL 9'].replace(/>=/i, '')
			}
			index = {
				ind
			}
			name = {
				this.props.name
			}
			handleClick = {
				() => {
					this.handleClick()
				}
			}
			/></div >

		}, this);

		return ( <div className="IfadeI" > {
				friends
			} </div>

		);


	}

}



export default ListContainer;