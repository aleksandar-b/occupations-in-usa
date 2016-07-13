import React from 'react';
export default class Occupation extends React.Component{
  constructor(props) {
    super(props);
    this.state = {year:1922};
  }




  
  componentWillUnmount() {
	  this.props.loadingCallback(true);
  }
  
  componentDidMount() {
    this.props.loadingCallback(false);


fetch('https://gist.githubusercontent.com/samosale/31024d9b3270c1706895339dad678ecd/raw/89aa30eabf984416e024e2692f3b715f63ecdd1e/random-data.json').then(function(data){

return data.json();
}).then(function(json){




//inspiration //https://vimeo.com/77330591#t=80s
var svg = document.querySelector('.small');

var svg1 = document.querySelector('.rects');
var year = document.getElementsByClassName('year')[0];
var counter = 0;
var counterLine = 0;
var counterReg =0;
var yearCount = 1922;
var pathLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
pathLine.setAttribute('stroke',"black");
pathLine.classList.add('pathLine');
var pathM = `M0 ${(219 -json[0*3].close)} `;
for(var i = 0; i<256; i++){
  var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  
   var line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  
 pathM += `L${(i*8.91)} ${230 -json[i*3].close/1.3}`;

  line.setAttribute("x1", "0");
  line.setAttribute("x2", "3000");
  line.setAttribute("y1", counterLine);
  line.setAttribute("y2", counterLine);
  line.setAttribute("stroke-width", "1");
  line.classList.add('crisp');
  line.setAttribute("stroke", "white");
  
   
  line2.setAttribute("x1", counterLine);
    line2.setAttribute("x2", counterLine);
  line2.setAttribute("y1", "0");
  line2.setAttribute("y2", "1000");
   line2.setAttribute("stroke-width", "1");
  
  line2.classList.add('crisp');
  line2.setAttribute("stroke", "white");
  
  
  rect.classList.add("rect");
  rect.setAttribute("x", counter);
  rect.setAttribute("y", "396"- +json[i*3].close/1.5);
 rect.setAttribute("fill", "white");
  rect.setAttribute("width", "7.16");
 rect.setAttribute("height", +json[i*3].close/1.5);
  /*rect.setAttribute("stroke-width", "3");
  rect.setAttribute("stroke", "white");*/
 //rect.style.animationDelay = (counterReg*3)+'0ms'; //animation Delay
 counterLine = counterLine+44;
  
  svg1.appendChild(rect);
  if(counterReg === 9){
   line.setAttribute("stroke-width", "2");
    line.setAttribute("style", "opacity:.2");
  }
  if(counterLine< 500){
    svg.appendChild(line);
    
  }
counterReg++;  
  if(counterLine< 1500){
    svg.appendChild(line2);
  }
  counter = counter+8.88;
}


pathLine.setAttribute("d",pathM);
var length = pathLine.getTotalLength();



pathLine.setAttribute("stroke-dasharray",length);

svg1.appendChild(pathLine);
 
  svg1.classList.add('translate');

  var rectsArray = Array.from(document.querySelectorAll('rect'));
/*  Array.from(rectsArray).forEach(function(val){
  
    val.classList.add('animation');
    
    
    if(typeof window.MozPowerManager === "function"){
      val.style.transformOrigin = "2px";
    }
    
  });*/


  var countereee = 0;
var lengthRects = rectsArray.length;
var that= this;
  var raf = window.requestAnimationFrame(function name() {
    
     rectsArray[countereee].classList.add('animation');
      countereee++;
if(countereee % 3 === 0){
  year.innerHTML = yearCount++;
//that.setState({year:that.state.year+1})
}
if(countereee === lengthRects){

  window.cancelAnimationFrame(raf);
}
      window.requestAnimationFrame(name);

    });


});

  }
render(){

var salary = localStorage.getItem('--occupation');
return(

<div style={{textAlign:"center",fontSize:"1.8em"}}>
 <h1> {this.props.params.occupation} </h1>

  <div className="tr">
<svg  version="1.1" xmlns="http://www.w3.org/2000/svg" className="small" viewBox="0 0 1200 460" preserveAspectRatio="xMidYMin meet">
    <use xlinkHref="#viewBoxBorder"/>
  
  <g className="rects"></g>
  
  <g className="text">
  <text x="250" y="150" 
        fontFamily="Verdana" 
        fontSize="16">
    Jul
  </text>
 <text x="350" y="150" 
        fontFamily="Verdana" 
        fontSize="16">
    Sep
  </text>
   <text x="450" y="150" 
        fontFamily="Verdana" 
        fontSize="16">
    Oct
  </text>
     <text x="550" y="150" 
        fontFamily="Verdana" 
        fontSize="16">
    Nov
  </text>
     <text x="650" y="150" 
        fontFamily="Verdana" 
        fontSize="16">
    Dec
  </text>
     <text x="750" y="150" 
        fontFamily="Verdana" 
        fontSize="16">
    Jan
  </text>

     <text x="850" y="150" 
        fontFamily="Verdana" 
        fontSize="16">
    Feb
  </text>
 
     <text x="950" y="150" 
        fontFamily="Verdana" 
        fontSize="16">
    Mar
  </text>

     <text x="1050" y="150" 
        fontFamily="Verdana" 
        fontSize="16">
    Apr
  </text>


     <text x="1150" y="150" 
        fontFamily="Verdana" 
        fontSize="16">
    May
  </text>

     <text x="1250" y="150" 
        fontFamily="Verdana" 
        fontSize="16">
    Jun
  </text>

     <text x="1350" y="150" 
        fontFamily="Verdana" 
        fontSize="16">
    Jul
  </text>
     <text x="1450" y="150" 
        fontFamily="Verdana" 
        fontSize="16">
    Avg
  </text>
  </g>
</svg>
<h1 className="year" style={{fontSize:"10em"}}>  {this.state.year} </h1>
</div>
 
 <h1  style={{fontSize:"5em"}}>  {salary} </h1>
</div>
)

}

}
