import React, {Component} from 'react';
var PackLayout = require('react-layout-pack');

class Add extends Component {

    componentDidMount() {
    this.props.loadingCallback(false);
  } 
  componentWillUnmount(){
    this.props.loadingCallback(true);
  }
    render() {
        return (
             <PackLayout tag="ul" className="packed-layout">
        <li style={{width:"50%"}}>One element</li>
        <li>Another element</li>
        <li>A third element</li>
        <li>A fourth element</li>
        <li>A fifth element</li>
    </PackLayout>

        );
    }
}

export default Add;