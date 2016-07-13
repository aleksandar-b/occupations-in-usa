import React, {Component} from 'react';

class Add extends Component {

    componentDidMount() {
    this.props.loadingCallback(false);
  } 
  componentWillUnmount(){
    this.props.loadingCallback(true);
  }
    render() {
        return (
            <div style={{position:"relative",zIndex:"500"}}>
                
                ADD CONTENT HERE
            </div>
        );
    }
}

export default Add;