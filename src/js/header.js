import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';



var Header = function(prop){



	return (
<header>
    <ul id="header">

<li><Link className="fontHed" to="/list">List</Link></li>
  <li><Link className="fontHed" to="/user"><i className="fa fa-bar-chart"></i>Mentor</Link></li>
  <li><a className="fontHed" href="/"><span className="white  font"> </span> Occupations In USA</a></li>
  <li><a className="fontHed" href="#"><i className="fa fa-user"></i>
Login</a></li>
  <li><a className="fontHed" href="#"><i className="fa fa-line-chart"></i>
Register</a></li>
    </ul>
    </header>





	)


}

export default Header;
