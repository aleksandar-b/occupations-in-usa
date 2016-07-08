import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';



var Header = function(prop){

var storage = JSON.parse(localStorage.getItem('firebase:session::glowing-inferno-663'));
var img = prop.imgLogo || storage.password.profileImageURL || "";
var email = storage.password.email || "";
var showLogin = (email)?"none":"block";

	return (
<header>
    <ul id="header">

<li><Link className="fontHed" to="/list">List</Link></li>
  <li><Link className="fontHed" to="/mentor"><i className="fa fa-bar-chart"></i>Mentor</Link></li>
  <li><a className="fontHed" href="/"><span className="white  font"> </span> Occupations In USA</a></li>
  <li style={{display:showLogin}}><Link className="fontHed" to="/login"><i className="fa fa-user"></i>Login</Link></li>
  <li><a className="fontHed" href="#"><i className="fa fa-line-chart"></i>
Register</a>

</li>
<span className="User" style={{float:"right",height:"85%", fontSize:"13px", color:"white", cursor:"pointer",marginRight:"6px"}} >
<span style={{paddingTop:"4px",display:"inline-block"}}>{email}</span>
<img style={{float:"right",height:"100%",marginLeft:"8px"}} src={img}/>
    </span></ul>
    </header>





	)


}

export default Header;
