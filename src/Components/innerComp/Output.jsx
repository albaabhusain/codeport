import React, { useContext,useEffect } from 'react';
import GlobalContext from '../../context/global-context';
import buildHTML from '../build';
const Output = () => {
    
    const{property,codeObj,element,setcodeObj,outObj,setoutObj,spProperty}= useContext(GlobalContext);
    // const {height,width,color,background} = property;
    useEffect(()=>{
        buildHTML(element,setcodeObj,codeObj,outObj,setoutObj,property,spProperty);
       
    },[property,element,spProperty]);
  
    console.log(codeObj) 
    
    return (
        <>
        <style>
            {
               codeObj.CSS
            }
        </style>
       
            <div className="output">
                {
                codeObj.html
                }     
                
            </div>  
            <script defer >
            {
                codeObj.JS
            }
        </script> 
        </>
    );
}

export default Output;
