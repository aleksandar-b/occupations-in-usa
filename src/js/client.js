import React from 'react';
import ReactDOM from 'react-dom';
import ListMain from './list';
import Header from './header';
import Sidebar from './sidebar';
import Second from './second';
import DefaultComponent from './defaultComponent';
import Login from './login';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
var DefaultRoute = Router.DefaultRoute;

class Main extends React.Component {

constructor(props){

  super(props);


  this.state = {arr:['','','','','',''],img:""}
}


handleLogin(userObj){
console.log(userObj.password.profileImageURL)

this.setState({img:userObj.password.profileImageURL});
console.log(this.state)

}


pushToState(json){
  console.log('jjjj');
  var arr =[];
  
this.setState({arr:arr,json:json })
  var length = Math.floor((Math.random() * 10) + 1);

 for(var i=0; i<length; i++){
    arr.push('f');
  }


  this.setState({arr:arr,json:json })
}
render () {
var that = this;
return (
<div className="chart">
<Header imgLogo={that.state.img} />
<div className="obrus">
<div className="padding">
  {this.props.children && React.cloneElement(this.props.children, {
            reta: "ffffff", glState:this.pushToState.bind(this), json:this.state.json,loginCallback:this.handleLogin.bind(this)
          })}


</div>
</div>
<Sidebar arr={this.state.arr} />

</div>

   );

 }

}


class Occupation extends React.Component{
  constructor(props) {
    super(props);
  }

render(){

return(
<div>
  {this.props.params.occupation}
</div>
)

}

}

const app = document.getElementById('app');
ReactDOM.render(<Router history={browserHistory}>
<Route path="/"  component={Main} >
  <IndexRoute component={ListMain}/>
  <Route path="/list" pushTo={parent.pushToState}  component={ListMain} />
  <Route path="/mentor" pushTo={77} component={Second} />
  <Route path="/login" loginCallback = {parent.handleLogin} component={Login} />
  <Route path="/ocupation/:occupation" pushTo={77} component={Occupation} />
</Route>
  </Router>, app);
