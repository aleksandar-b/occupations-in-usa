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

	componentWillUnmount() {

		this.props.loadingCallback(true);

	}
	

	componentDidMount() {

		var sidebar = document.querySelector('.e');
		var rect = sidebar.getBoundingClientRect();
		sidebar.style.height = window.innerHeight + 'px';
		var cube = document.querySelector(".sk-cube-grid");
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

		if (!this.props.json) {
			var myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/json');

			

			fetch('https://gist.githubusercontent.com/samosale/bc0920114e48c1ccccef/raw/e3bd03045d586f094baef6011cea44228e1301f3/gistfile1.json')
				.then((response) => {

					return response.json()
				}).then((json) => {
				//	this.props.glState(json);
				cube.style.display = "none";
				this.props.loadingCallback(false);
				
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


		var friends = this.state.friends.map(function(val, ind) {

			return <div key = {
				ind
			} > <Item 
			loadingCallback ={ ()=>this.props.loadingCallback(true)}

	
			email = {
				val['name']
			}
			salary = {
				val['salary']
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

		return ( 
			<div>

			<div style={{margin:"10 auto", textAlign:"center"}}>
			<h2 >820 Occupations in USA</h2>
			</div>
			<div style={{padding:"20px"}} className="IfadeI" > 
		
			<div className="sk-cube-grid">
  <div className="sk-cube sk-cube1"></div>
  <div className="sk-cube sk-cube2"></div>
  <div className="sk-cube sk-cube3"></div>
  <div className="sk-cube sk-cube4"></div>
  <div className="sk-cube sk-cube5"></div>
  <div className="sk-cube sk-cube6"></div>
  <div className="sk-cube sk-cube7"></div>
  <div className="sk-cube sk-cube8"></div>
  <div className="sk-cube sk-cube9"></div>
</div>
				{friends
			} </div>
</div>
		);


	}

}



export default ListContainer;