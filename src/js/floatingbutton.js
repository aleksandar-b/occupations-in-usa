 import React from 'react';
 import ReactDOM from 'react-dom';
import Ink from 'react-ink';
import { browserHistory } from 'react-router';

 class FloatingButton extends React.Component {

     componentDidMount() {

         var chart = document.getElementsByTagName('body')[0];
         const layer = document.createElement('div');
         layer.style.position = "absolute";
         layer.classList.add('overflowClass');
         layer.style.top = "0px";
         layer.style.left = "0px";
         layer.innerHTML = "<h1 >SAVE THE PLANET!</h1>";

         layer.style.zIndex = "200";
         layer.style.overflow = "hidden";

         var effectNode = document.createElement('div');
         effectNode.className = 'circleEffect';
var rElem = ReactDOM.findDOMNode(this);
         var bounds = rElem.getBoundingClientRect();

             rElem.addEventListener('animationend', function() {
             this.classList.toggle('hiphop');

         });

         effectNode.style.zIndex = "100";
         //effectNode.style.background = 'hsl(' + Math.round(Math.random() * 255) + ', 26%,62%)';
         effectNode.style.left = (bounds.left + bounds.width / 2) + 'px';
         effectNode.style.top = bounds.top + window.scrollY  + bounds.height / 2 + 'px';

         //var effect = layer.appendChild(effectNode)

         let overflow = chart.appendChild(layer);


         var eff = overflow.appendChild(effectNode);

         eff.addEventListener('animationend', function() {
/*             this.parentNode.style.width = "0%";
             this.parentNode.style.height = "0vh";
             chart.style.overflow = "";
         this.classList.toggle('addAnimation');
*/
         });


     }



     handleClick(e) {



         let circle = document.querySelector('.circleEffect');
         let overflow = document.querySelector('.overflowClass');
    let back = document.querySelector('.backButton');
circle.classList.add('addAnimation');
         back.style.display = "block";  
         overflow.style.top = window.scrollY+"px";
         overflow.style.width = "100%";
         overflow.style.height = "100vh";
         
         browserHistory.push('/add');
     }






     render() {
         return (
             
              <a onClick = {this.handleClick.bind(this) } className="floatingButton"
             style = {
                 {
                     position: "fixed",
                     cursor: "pointer",
                     top: "90%",
                     right: "25px",
                     boxShadow: "0 0 2px rgba(33, 82, 119,.6), 0 2px 8px rgba(33, 82, 119, .6)",
                     borderRadius: "50%",
                     width: "58px",
                     height: "58px",
                     background: "#2196F3",
                     float: "right",
                     zIndex:"300"
                 }
             } > <div style={{color:"white",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%) scale(1.6)", transformOrigin:"center" }} className="iTag"><i  className="fa fa-plus " aria-hidden="true"></i></div></a>

         );
     }
 }



 export default FloatingButton;