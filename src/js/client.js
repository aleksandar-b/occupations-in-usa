import React from 'react';
import ReactDOM from 'react-dom';
import ListMain from './list';
import Header from './header';
import Sidebar from './sidebar';
import Second from './second';
import DefaultComponent from './defaultComponent';
import Login from './login';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
var firebaseUtils = require('../utils/firebaseUtils');
import Register from './register';
import Occupation from './occupation'

class Main extends React.Component {

constructor(props){

  super(props);

  this.state = {arr:['','','','','',''],img:"", flagToggle:false, isLoggedIn:firebaseUtils.isLoggedIn(),loading:true}
}

handleLogout(loggedIn){


  this.setState({
      isLoggedIn: loggedIn
    });
}

componentWillMount() {
      firebaseUtils.onChange = this.handleLogout.bind(this);

}

toggleMenu(){

this.setState({flagToggle:!this.state.flagToggle});

}

handleLogin(userObj){

this.setState({img:userObj.password.profileImageURL});

}


pushToState(json){
  var arr =[];
  
this.setState({arr:arr,json:json })
  var length = Math.floor((Math.random() * 10) + 1);

 for(var i=0; i<length; i++){
    arr.push('f');
  }


  this.setState({arr:arr,json:json })
}

logOutProba(){

    firebaseUtils.logout();


}

loadingCallback(bool){

  this.setState({loading:bool});
}

render () {
var that = this;
return (
<div className="chart">
<Header logOutProba={this.logOutProba.bind(this)} loading={this.state.loading} isLoggedIn={this.state.isLoggedIn} imgLogo={that.state.img} toggleMenu={this.toggleMenu.bind(this)} flagToggle={this.state.flagToggle}/>
<div className="obrus">
<div className="padding">
  {this.props.children && React.cloneElement(this.props.children, {
            reta: "ffffff", glState:this.pushToState.bind(this),loading:this.state.loading, loadingCallback:this.loadingCallback.bind(this), json:this.state.json,loginCallback:this.handleLogin.bind(this)
          })}
</div>
</div>
<Sidebar arr={this.state.arr} />

</div>

   );
 }

}

const app = document.getElementById('app');
ReactDOM.render(<Router history={browserHistory}>
<Route path="/"  component={Main} >
  <IndexRoute component={ListMain}/>
  <Route path="/list"   component={ListMain} />
  <Route path="/mentor" component={Second} />
  <Route path="/login" component={Login} />
   <Route path="/register" component={Register} />

  <Route path="/ocupation/:occupation" component={Occupation} />
</Route>
  </Router>, app);
