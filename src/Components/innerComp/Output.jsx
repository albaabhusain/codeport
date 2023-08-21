import React, { useContext,useEffect } from 'react';
import GlobalContext from '../../context/global-context';
import buildHTML from '../build';
const Output = () => {
    
    const{property,codeObj,element,setcodeObj,outObj,setoutObj}= useContext(GlobalContext);
    // const {height,width,color,background} = property;
    useEffect(()=>{
        buildHTML(element,setcodeObj,codeObj,outObj,setoutObj,property);
       
    },[property,element]);
  
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
