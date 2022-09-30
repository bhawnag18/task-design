import React from 'react';
import './Design2.css';
const Design2=()=>{

    const handleHover1=()=>{
        console.log('first');
   var p1=document.getElementById('clickme4');
    p1.classList.add("two");
    p1.classList.remove('one');
  var p2=document.getElementById('clickme5');
    p2.classList.add("one");
    p2.classList.remove('two');
   var p3=document.getElementById('clickme6');
    p3.classList.add("one");
    p3.classList.remove('two');

    }
    const handleHover2=()=>{
        console.log('two');
   var p1=document.getElementById('clickme4');
    p1.classList.add("one");
    p1.classList.remove('two');
  var p2=document.getElementById('clickme5');
    p2.classList.add("two");
    p2.classList.remove('onw');
   var p3=document.getElementById('clickme6');
    p3.classList.add("one");
    p3.classList.remove('two');

    }
    const handleHover3=()=>{
        console.log('three');
        var p1=document.getElementById('clickme4');
         p1.classList.add("one");
         p1.classList.remove('two');
       var p2=document.getElementById('clickme5');
         p2.classList.add("one");
         p2.classList.remove('two');
        var p3=document.getElementById('clickme6');
         p3.classList.add("two");
         p3.classList.remove('one');

    }
    return(
        <>
     
     <div className='main'>
  <div className='two all4' id='clickme4' onMouseOver={handleHover1}>
    
    <h3 style={{color:'white'}}>STRENGTH</h3>
  </div>
  <div className='one all5'  id='clickme5' onMouseOver={handleHover2} >
     <h3 style={{color:'white'}}>MOBILITY</h3>
  </div>
  <div className='one  all6'  id='clickme6' onMouseOver={handleHover3}>
     <h3 style={{color:'white'}}>DRILLS</h3>
  </div>
  
  
  
</div>

        </>
    )
}
export default Design2;