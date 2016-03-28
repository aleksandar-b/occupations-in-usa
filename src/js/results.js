import React from 'react';
import ReactDOM from 'react-dom';


export default class Results extends React.Component {
	
	constructor(props){
		
		super(props);
	}
	
	
	render(){
		
		return(
			<div>
		
				<div style={{animationDelay:this.props.index*100+'ms'}} className="display fadeDesno">
					<div className="time font"> {5}</div>
					<div className="tution font">{111}
						<div className="hidden"></div>
					</div>
					<div className="red">
						<i className="fa fa-caret-right"></i>
						<a target="_blank" href="" className="font">MIT</a>
					</div>
					
				</div>
				

			</div>);
		
	}
	
	
	
	
	
	
}
/*
				</br>
				<div className="display animated fadeInRight">
					<div className="time">{5}</div>
					
						<div className="tution">{111}<div className="hidden"></div> </div>
						
						<div className="red">
							<i className="fa fa-caret-right"></i>
							<a target="_blank" href="m">MIT</a>
						</div>
				
				 </div>
			</br>
			

*/