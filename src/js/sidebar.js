import React from 'react';
import ReactDOM from 'react-dom';
import Results from './results';
import {Tab, TabGroup} from 'material-tabs';
import Ink from 'react-ink';
 

var NavigationTabs = class NavigationTabs extends React.Component {
  render() {
      var groups =  <TabGroup>
        <Tab>
          Schools
        </Tab>
      <div style={{position:"relative",width:"100%",height:"100%"}}>
        <Ink/>
        
        <Tab>
          Videos
        </Tab>
        </div>
        <Tab>
          Mentors
        </Tab>
         <Tab>
          VR
        </Tab>
      </TabGroup>;
    return (
     <div>{groups}</div>
    );
  }
};


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
               <NavigationTabs/>

            
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



