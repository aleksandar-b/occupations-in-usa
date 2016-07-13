import React, {
    Component
} from 'react';
import { browserHistory } from 'react-router';

class backButton extends Component {




    getStyle() {
        const {
            show
            
        } = this.props;

        return {
            position: "absolute",
            top: "0px",
            left: "0px",
            padding:"6px",
            color:"white",
            background:"rgba(27, 120, 162, 0.1)",
            display: "none",
            zIndex:"400",
            fontSize:"18px",
            cursor:"pointer"


        }

    }

redirect(){
    let circle = document.querySelector('.circleEffect');
    let overflow = document.querySelector('.overflowClass');
        let back = document.querySelector('.backButton');

         circle.classList.remove('addAnimation');
         overflow.style.width = "0%";
         overflow.style.height = "0vh";
         back.style.display = "none";



browserHistory.push('/');
}


    render() {
        const style = this.getStyle();


        return (
             <a className="backButton" onClick={this.redirect.bind(this)} style={ style }>{this.props.children}</a>
        );
    }
}

export default backButton;