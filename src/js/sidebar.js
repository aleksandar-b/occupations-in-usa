import React from 'react';
import ReactDOM from 'react-dom';
import Results from './results';

export default class Sidebar extends React.Component {
	
	constructor(props){
		
		super(props);
        this.state = {
            rad:this.props.arr
            
        }
	}
	
    componentWillReceiveProps(nextProps) {
  this.setState({
    rad: nextProps.arr
  })
}
    
	render(){
                
                 var rad = this.state.rad.map(function(val, index){
                    
                    return <Results index={index} key={index+val}/>;
                });
                
		
		return(
		<div className="e e1">
            <div className="headermin">
              
              <div className="kocka3">
  
              <div className="kocka33">
                  <h4><a className="animat font" >Programer(IT)</a></h4>
              </div>
  
              </div>
              
              <div className="kocka4"></div>
            </div>
            
            <div className="center1">
                    <div className="gam3" title="Schools/Courses"></div>
                    <div className="gam5" title="Online Video Tutorials - Ciriculums" ></div>
                    <div className="gam5" title="Virtual Reality" ></div>
                     <div className="gam6" title="Mentors" ></div>

            
            </div>

            <div className="clear"></div>
            <div className="miniHeader font">Schools/Courses</div>
            <div className="ann animated">
                <div className="data">
             {rad}
          
                </div>
            </div>
     </div>
     
		);
		
	}
	
	
	
	
	
	
}



