import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
var Ink = require('react-ink');
var firebaseUtils = require('../utils/firebaseUtils');

var Header = function(prop){

var storage = JSON.parse(localStorage.getItem('firebase:session::glowing-inferno-663'));
if(storage){
var img = prop.imgLogo || storage.password.profileImageURL || "";
var email = storage.password.email || "";

}

console.log("header")
console.log(prop.isLoggedIn,"header")
var isLoggedIn = (prop.isLoggedIn)?"none":"inline-block";
var menuDisplay = (prop.isLoggedIn)?"block":"none";;

var display = (prop.flagToggle)?"block":"none";

var handleClick = () => { prop.toggleMenu()};
var logOut = () => {

    prop.logOutProba()
};



	return (
<header>
    <ul id="header">

<li><Link className="fontHed" to="/list">List</Link></li>
  <li><Link className="fontHed" to="/mentor"><i className="fa fa-bar-chart"></i>Mentor</Link></li>
  <li><Link className="fontHed" to="/"><span className="white  font"> </span> Occupations In USA</Link></li>
  <li style={{display:isLoggedIn}}><Link className="fontHed" to="/login"><i className="fa fa-user"></i>Login</Link></li>
  <li style={{display:isLoggedIn}}><Link className="fontHed" to="/register"><i className="fa fa-user"></i>Register</Link></li>

<span onClick={handleClick} className="User" style={{display:menuDisplay,float:"right",height:"85%", fontSize:"13px", color:"white", cursor:"pointer",marginRight:"6px",paddingLeft:"6px"}} >
 <Ink />
<div className="dropdown" style={{display:display}}><p style={{ display:email,padding:"5px 16px 5px 16px"}} > <Ink />{email}</p><p style={{position:"relative",padding:"5px 0 5px 0"}}> <Ink />Account</p> <p style={{position:"relative",padding:"5px 0 5px 0"}}> <Ink />Settings</p><p style={{position:"relative",padding:"5px 0 5px 0"}} onClick={logOut}> <Ink />Logout</p></div>
<img style={{float:"left",height:"95%",margin:"auto 6px auto 0px", borderRadius:"50%"}} src={img}/>
<span style={{paddingTop:"4px",paddingRight:"2px",display:"inline-block"}}>{email}</span>

    </span></ul>
    </header>

	)


}

export default Header;
