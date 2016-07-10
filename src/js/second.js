import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'


 class Second extends React.Component {

constructor(props){
super(props)

}

  componentWillMount() {
    this.props.loadingCallback(true);
  }
  componentWillUnmount() {
	  this.props.loadingCallback(true);
  }
  
  componentDidMount() {
    this.props.loadingCallback(false);
  }
  
handleClick(){

	console.log(this.props.email);
	this.props.pushToPar();

}

render () {



return(

<div>fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
<h2>{this.props.params.occupation}</h2>
</div>

)

/*
	return (
	<div className="hover1" ref="ff"><div className="de">{this.props.email}</div><div className="ret"  style={width:'250px'} > {this.props.salary} </div></div>
)
*/
}

}

export default Second
