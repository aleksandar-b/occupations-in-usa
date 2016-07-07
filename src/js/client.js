import React from 'react';
import ReactDOM from 'react-dom';
import ListMain from './list';
import Header from './header';
import Sidebar from './sidebar';
import Second from './second';
import DefaultComponent from './defaultComponent';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
var DefaultRoute = Router.DefaultRoute;

class Main extends React.Component {

constructor(props){

  super(props);


  this.state = {arr:['','','','','','']}
}

pushToState(json){
  console.log('jjjj');
  var arr =[];

  var length = Math.floor((Math.random() * 10) + 1);
  for(var i=0; i<length; i++){
    arr.push('f');
  }
  this.setState({arr:arr,json:json })
}
render () {

return (
<div className="chart">
<Header/>
<div className="obrus">
<div className="padding">
  {this.props.children && React.cloneElement(this.props.children, {
            reta: "ffffff", glState:this.pushToState.bind(this), json:this.state.json
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
  <Route path="/user" pushTo={77} component={Second} />
  <Route path="/ocupation/:occupation" pushTo={77} component={Occupation} />
</Route>
  </Router>, app);
