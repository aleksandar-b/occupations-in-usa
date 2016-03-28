import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import { Router, Route, Link, browserHistory } from 'react-router';



 class List extends React.Component {

constructor(props){
super(props)
}
handleClick(){
this.props.handleClick();
	console.log(this.props.email);
	console.log(this.props.pushToPar);

}

render () {



return(
	<div className="hover1" onClick={this.handleClick.bind(this)} >
<Link to={"/user/"+this.props.email}  >
<div className="de">{this.props.email}</div>
<div className="ret" style={{width:parseInt(this.props.salary.slice(1))*3+'px'}}>{this.props.salary}</div>
</Link>
</div>

)
/*
	return (
	<div className="hover1" ref="ff"><div className="de">{this.props.email}</div><div className="ret"  style={width:'250px'} > {this.props.salary} </div></div>
)
*/
}

}


class FriendsContainer extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			friends:[],
			shouldRec:true

		}


	}



	shouldComponentUpdate(){

	return this.state.shouldRec;
}

componentDidMount(){

var sidebar = document.querySelector('.e');
var rect = sidebar.getBoundingClientRect();
sidebar.style.height = window.innerHeight+'px';
if(this.state.opacity){
document.querySelector('.obrus').classList.add('opacity');
}
document.addEventListener('scroll',function(e){


if(window.pageYOffset>rect.top){


	sidebar.style.position = 'fixed';
	sidebar.style.top = '0';
	sidebar.style.right = '0';
}else{


	sidebar.style.position = 'relative';
}
});
console.log( this.state.friends.length  );

if(!this.props.json){

fetch('https://gist.githubusercontent.com/samosale/bc0920114e48c1ccccef/raw/d80f635e60ecb9a3680cdb8f9bb6f52ee638e6f6/gistfile1.json')
  .then((response) => {

  	    return response.json()
  }).then((json) => {
    this.props.glState(json);

    this.setState({friends:json,
	opacity:true,shouldRec:false});
      }).catch((ex) => {
    console.log('parsing failed', ex)
  });



}else{
  this.setState({friends:this.props.json,
opacity:true,shouldRec:false});

}

}

	handleClick(){


this.props.glState();

			}



	render() {


			var friends	= this.state.friends.sort(function(a, b) {
    return parseFloat(b['COL 9'].replace(/>=/i,'').slice(1)) - parseFloat(a['COL 9'].replace(/>=/i,'').slice(1));
}).map(function(val,ind){

		return <div><List key={ind} pushToPar={this.props.pushTo}  email={val['COL 1']} salary={val['COL 9'].replace(/>=/i,'')} index={ind} name={this.props.name} handleClick={()=>{this.handleClick()}}/></div>

	}, this);

		return (
			<div>
			{friends}
			</div>

		);


}

}



export default FriendsContainer;
