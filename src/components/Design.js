import React from 'react';
import './Design.css';
const Design=()=>{

    const handleHover1=()=>{
        console.log('first');
   var p1=document.getElementById('clickme1');
    p1.classList.add("two");
    p1.classList.remove('one');
  var p2=document.getElementById('clickme2');
    p2.classList.add("one");
    p2.classList.remove('two');
   var p3=document.getElementById('clickme3');
    p3.classList.add("one");
    p3.classList.remove('two');

    }
    const handleHover2=()=>{
        console.log('two');
   var p1=document.getElementById('clickme1');
    p1.classList.add("one");
    p1.classList.remove('two');
  var p2=document.getElementById('clickme2');
    p2.classList.add("two");
    p2.classList.remove('onw');
   var p3=document.getElementById('clickme3');
    p3.classList.add("one");
    p3.classList.remove('two');

    }
    const handleHover3=()=>{
        console.log('three');
        var p1=document.getElementById('clickme1');
         p1.classList.add("one");
         p1.classList.remove('two');
       var p2=document.getElementById('clickme2');
         p2.classList.add("one");
         p2.classList.remove('two');
        var p3=document.getElementById('clickme3');
         p3.classList.add("two");
         p3.classList.remove('one');

    }
    return(
        <>
     
     <div className='main'>
  <div className='two all1' id='clickme1' onMouseOver={handleHover1}>
    
    <h3 style={{color:'white'}}>STRENGTH</h3>
  </div>
  <div className='one all2'  id='clickme2' onMouseOver={handleHover2} >
     <h3 style={{color:'white'}}>MOBILITY</h3>
  </div>
  <div className='one  all3'  id='clickme3' onMouseOver={handleHover3}>
     <h3 style={{color:'white'}}>DRILLS</h3>
  </div>
  
  
  
</div>

        </>
    )
}
export default Design;