import React from 'react';
import ReactDOM from 'react-dom';
import Results from './results';
import {Tab, TabGroup} from 'material-tabs';
import Ink from 'react-ink';
import FloatingButton from './floatingbutton';
 

var NavigationTabs = class NavigationTabs extends React.Component {

  handleClick(){

this.props.glState();

  }
  
  render() {

      var groups =  <TabGroup>
     
        <Tab onClick={this.handleClick.bind(this)}>
          Schools
        </Tab>
     
       
        <div>

        <Tab onClick={this.handleClick.bind(this)}>
     Videos
     
        </Tab>
        
     </div>


          <Tab onClick={this.handleClick.bind(this)}>
          Mentors
        </Tab>
           <Tab onClick={this.handleClick.bind(this)}>
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
    var Title = (this.props.params)?this.props.params.occupations: localStorage.getItem('-occupation-') || "Orthodontist";
                
                 var rad = this.state.rad.map(function(val, index){
                    
                    return <Results index={index} key={index+val}/>;
                });
                

		return(
		<div className="e e1">
    <FloatingButton ><p style={{zIndex:"6000",position:"relative"}}>SAVE THE PLANET</p></FloatingButton>
            <div className="headermin">
              
              <div className="kocka3">
  
              <div className="kocka33">
                  <h4><a className="animat font" >{Title}</a>
</h4>
              </div>
  
              </div>
              
              <div className="kocka4"></div>
            </div>
            
            <div className="center1">
                    <div className="gam3" title="Schools/Courses"></div>
               <NavigationTabs glState={this.props.glState.bind(this)}/>

            
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



