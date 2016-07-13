import React from 'react';
import ReactDOM from 'react-dom';
import ListMain from './list';
import Header from './header';
import Sidebar from './sidebar';
import Second from './second';
import Login from './login';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
var firebaseUtils = require('../utils/firebaseUtils');
import Register from './register';
import Occupation from './occupation';
import BackButton from './backButton';
import Add from './add';



class Main extends React.Component {

constructor(props){

  super(props);

  this.state = {arr:['','','','','',''],show:false,img:"", flagToggle:false, isLoggedIn:firebaseUtils.isLoggedIn(),loading:true}
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
  
this.setState({arr:arr,json:json });
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

toggleBack(){

  this.setState({show:!this.state.show});
}

render () {
var that = this;
return (
<div className="chart">
<Header logOutProba={this.logOutProba.bind(this)} loading={this.state.loading} isLoggedIn={this.state.isLoggedIn} imgLogo={that.state.img} toggleMenu={this.toggleMenu.bind(this)} flagToggle={this.state.flagToggle}/>
<div className="obrus">
			<BackButton><i style={{fontSize:"20px"}} className="fa fa-arrow-left" aria-hidden="true"></i></BackButton >

<div className="padding">
  {this.props.children && React.cloneElement(this.props.children, {
            loading:this.state.loading, loadingCallback:this.loadingCallback.bind(this), json:this.state.json,loginCallback:this.handleLogin.bind(this)
          })}
</div>
</div>
<Sidebar glState={this.pushToState.bind(this)} arr={this.state.arr} />

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
  <Route path="/add" component={Add} />

  <Route path="/ocupation/:occupation" component={Occupation} />
</Route>
  </Router>, app);
